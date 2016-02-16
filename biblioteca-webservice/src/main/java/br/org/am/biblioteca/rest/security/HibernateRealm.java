package br.org.am.biblioteca.rest.security;

import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.org.am.biblioteca.dao.UsuarioDAO;
import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;

/**
 * Realm para acessar banco de dados através do hibernate.
 *
 */
@Component
public class HibernateRealm extends AuthorizingRealm {
    private UsuarioDAO usuarioDAO;

    public HibernateRealm() {
        setName("hibernateRealm");
    }

    @Autowired
    public void setUsuarioDAO(UsuarioDAO usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(
            PrincipalCollection principalCollection) {
        String email = principalCollection.getPrimaryPrincipal().toString();

        Usuario usuario = usuarioDAO.findByEmailWithProgramaticTransaction(email);

        if (usuario == null) {
            return null;
        }

        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        for (Grupo grupo : usuario.getGrupoSet()) {
            info.addRole(grupo.getNome());
        }

        return info;
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(
            AuthenticationToken authenticationToken) throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;

        Usuario usuario = usuarioDAO
                .findByEmailWithProgramaticTransaction(token.getUsername());

        if (usuario == null) {
            return null;
        }

        return new SimpleAuthenticationInfo(usuario.getEmail(), usuario.getSenha(),
                getName());
    }
}
