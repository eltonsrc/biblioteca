package br.org.am.biblioteca.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.org.am.biblioteca.model.Usuario;

@Repository
class UsuarioDAOHibernate extends HibernateDAO<Usuario> implements UsuarioDAO {
    public Usuario findById(String id) {
        return (Usuario) getCurrentSession().get(Usuario.class, id);
    }

    public Usuario findByEmail(String email) {
        return (Usuario) getCurrentSession()
                .createQuery("select u from Usuario u where u.email = ?")
                .setParameter(0, email).uniqueResult();
    }

    @SuppressWarnings("unchecked")
    public List<Usuario> list() {
        return getCurrentSession().createQuery("select u from Usuario u").list();
    }
}
