package br.org.am.biblioteca.dao;

import java.util.List;

import br.org.am.biblioteca.model.Usuario;

public interface UsuarioDAO extends DAO<Usuario> {
    Usuario findByEmail(String email);

    List<Usuario> list();
}
