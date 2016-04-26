package br.org.am.biblioteca.dao;

import org.springframework.stereotype.Repository;

import br.org.am.biblioteca.model.Documento;

@Repository
class DocumentoDAOHibernate extends HibernateDAO<Documento> implements DocumentoDAO {

    public Documento findById(String id) {
        return (Documento) getCurrentSession().get(Documento.class, id);
    }

    public Documento findByCodRef(String codRef) {
        String hql = "select doc from Documento doc where doc.codRef = ?";
        return (Documento) getCurrentSession().createQuery(hql).setParameter(0, codRef)
                .uniqueResult();
    }

    public long getTotal() {
        String hql = "select count(doc) from Documento doc";
        return (Long) getCurrentSession().createQuery(hql).uniqueResult();
    }
}
