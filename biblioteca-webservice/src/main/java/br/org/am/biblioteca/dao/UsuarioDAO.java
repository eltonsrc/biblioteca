package br.org.am.biblioteca.dao;

import br.org.am.biblioteca.model.Usuario;

public interface UsuarioDAO extends DAO<Usuario> {
    Usuario findByEmail(String email);
}
