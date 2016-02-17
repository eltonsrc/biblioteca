package br.org.am.biblioteca.dao;

import org.springframework.stereotype.Repository;

import br.org.am.biblioteca.model.Grupo;

@Repository
class GrupoDAOHibernate extends HibernateDAO<Grupo> implements GrupoDAO {
    public Grupo findById(String id) {
        return (Grupo) getCurrentSession().get(Grupo.class, id);
    }

    public Grupo findByNome(String nome) {
        return (Grupo) getCurrentSession()
                .createQuery("select g from Grupo g where g.nome = ?")
                .setParameter(0, nome).uniqueResult();
    }
}
