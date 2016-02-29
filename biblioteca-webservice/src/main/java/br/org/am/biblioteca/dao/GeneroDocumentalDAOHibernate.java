package br.org.am.biblioteca.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import br.org.am.biblioteca.model.GeneroDocumental;

@Repository
class GeneroDocumentalDAOHibernate extends HibernateDAO<GeneroDocumental>
        implements GeneroDocumentalDAO {

    public GeneroDocumental findById(String id) {
        return (GeneroDocumental) getCurrentSession().get(GeneroDocumental.class, id);
    }

    @SuppressWarnings("unchecked")
    public List<GeneroDocumental> list() {
        return getCurrentSession().createQuery("select gd from GeneroDocumental gd")
                .list();
    }

    public Long count() {
        return (Long) getCurrentSession()
                .createQuery("select count(gd) from GeneroDocumental gd").uniqueResult();
    }
}
