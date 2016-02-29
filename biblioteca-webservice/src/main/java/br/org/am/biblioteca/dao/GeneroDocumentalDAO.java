package br.org.am.biblioteca.dao;

import java.util.List;

import br.org.am.biblioteca.model.GeneroDocumental;

public interface GeneroDocumentalDAO extends DAO<GeneroDocumental> {
    List<GeneroDocumental> list();

    Long count();
}
