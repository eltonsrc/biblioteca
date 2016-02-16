package br.org.am.biblioteca.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import br.org.am.biblioteca.model.BaseModel;

public abstract class HibernateDAO<E extends BaseModel> implements DAO<E> {
    protected SessionFactory sessionFactory;

    @Autowired
    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    /**
     * Para ser usado dentro de uma transação do spring.
     * 
     * @return
     */
    protected Session getCurrentSession() {
        return sessionFactory.getCurrentSession();
    }

    public void save(E e) {
        getCurrentSession().saveOrUpdate(e);
    }

    public void update(E e) {
        getCurrentSession().update(e);
    }

    public void remove(E e) {
        getCurrentSession().delete(e);
    }

    public void refresh(E e) {
        getCurrentSession().refresh(e);
    }

    @SuppressWarnings("unchecked")
    public E merge(E e) {
        return (E) getCurrentSession().merge(e);
    }

    public void flush() {
        getCurrentSession().flush();
    }
}
