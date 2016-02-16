package br.org.am.biblioteca.dao;

import br.org.am.biblioteca.model.BaseModel;

public interface DAO<E extends BaseModel> {
    E findById(String id);

    void save(E e);

    void update(E e);

    void remove(E e);

    /**
     * L� novamente o estado do objeto do banco de dados.
     * 
     * @param t
     */
    void refresh(E e);

    /**
     * Copia o estado do objeto t no objeto persistido com o mesmo
     * identificador.
     * 
     * @param t
     */
    E merge(E e);

    /**
     * Processo que sincroniza o estado das persist�ncias que est�o em mem�ria
     * com o sistema de persist�ncia utilizado, normalmente um SGBD.
     */
    void flush();
}
