package br.org.am.biblioteca.dao;

import br.org.am.biblioteca.model.Grupo;

public interface GrupoDAO extends DAO<Grupo> {
    Grupo findByNome(String nome);
}
