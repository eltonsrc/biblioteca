package br.org.am.biblioteca.dao;

import br.org.am.biblioteca.model.Usuario;
import br.org.am.biblioteca.rest.security.HibernateRealm;

public interface UsuarioDAO extends DAO<Usuario> {
    /**
     * M�todo criado para ser usado no {@link HibernateRealm}, porque dentro do
     * realm do shiro o spring n�o consegue criar uma transa��o.
     * 
     * @param email
     * @return
     */
    Usuario findByEmailWithProgramaticTransaction(String email);
}
