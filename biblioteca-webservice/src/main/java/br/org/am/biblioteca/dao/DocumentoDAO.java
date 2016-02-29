package br.org.am.biblioteca.dao;

import br.org.am.biblioteca.model.Documento;

public interface DocumentoDAO extends DAO<Documento> {
    Documento findByCodRef(String codRef);
}
