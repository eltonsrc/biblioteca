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
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallback;
import org.springframework.transaction.support.TransactionTemplate;

import br.org.am.biblioteca.dao.UsuarioDAO;
import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;

/**
 * Realm para acessar banco de dados através do hibernate. Como o spring não
 * consegue criar transações automaticamente nesta classe, nós devemos criar
 * manualmente.
 *
 */
@Component
public class HibernateRealm extends AuthorizingRealm {
    private final TransactionTemplate transactionTemplate;
    private UsuarioDAO usuarioDAO;

    @Autowired
    public HibernateRealm(PlatformTransactionManager transactionManager,
            UsuarioDAO usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
        transactionTemplate = new TransactionTemplate(transactionManager);
        transactionTemplate.setReadOnly(true);
        setName("hibernateRealm");
    }

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(
            final PrincipalCollection principalCollection) {
        return transactionTemplate.execute(new TransactionCallback<AuthorizationInfo>() {
            public AuthorizationInfo doInTransaction(TransactionStatus status) {
                return doGetAuthorizationInfo(principalCollection, status);
            }
        });
    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(
            final AuthenticationToken authenticationToken)
                    throws AuthenticationException {
        return transactionTemplate.execute(new TransactionCallback<AuthenticationInfo>() {
            public AuthenticationInfo doInTransaction(TransactionStatus status) {
                return doGetAuthenticationInfo(authenticationToken, status);
            }
        });
    }

    private AuthorizationInfo doGetAuthorizationInfo(
            final PrincipalCollection principalCollection, TransactionStatus status) {
        String email = principalCollection.getPrimaryPrincipal().toString();

        Usuario usuario = usuarioDAO.findByEmail(email);

        if (usuario == null) {
            return null;
        }

        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();
        for (Grupo grupo : usuario.getGrupoSet()) {
            info.addRole(grupo.getNome());
        }

        return info;
    }

    private AuthenticationInfo doGetAuthenticationInfo(
            AuthenticationToken authenticationToken, TransactionStatus status)
                    throws AuthenticationException {
        UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;

        Usuario usuario = usuarioDAO.findByEmail(token.getUsername());

        if (usuario == null) {
            return null;
        }

        return new SimpleAuthenticationInfo(usuario.getEmail(), usuario.getSenha(),
                getName());
    }
}
