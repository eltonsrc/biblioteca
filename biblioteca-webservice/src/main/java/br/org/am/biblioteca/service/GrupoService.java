package br.org.am.biblioteca.service;

import br.org.am.biblioteca.model.Grupo;

public interface GrupoService {
    Grupo findByNome(String nome);
}
