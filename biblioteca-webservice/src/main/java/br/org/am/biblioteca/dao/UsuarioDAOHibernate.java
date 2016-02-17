package br.org.am.biblioteca.dao;

import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import br.org.am.biblioteca.model.Usuario;

@Repository
class UsuarioDAOHibernate extends HibernateDAO<Usuario> implements UsuarioDAO {
    public Usuario findById(String id) {
        return (Usuario) getCurrentSession().get(Usuario.class, id);
    }

    public Usuario findByEmailWithProgramaticTransaction(String email) {
        Session session = sessionFactory.openSession();

        session.beginTransaction();
        Usuario usuario = (Usuario) session
                .createQuery("select u from Usuario u where u.email = ?")
                .setParameter(0, email).uniqueResult();
        session.getTransaction().commit();
        session.close();

        return usuario;
    }

    public Usuario findByEmail(String email) {
        return (Usuario) getCurrentSession()
                .createQuery("select u from Usuario u where u.email = ?")
                .setParameter(0, email).uniqueResult();
    }
}
