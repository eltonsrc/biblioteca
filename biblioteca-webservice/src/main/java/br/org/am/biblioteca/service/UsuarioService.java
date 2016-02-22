package br.org.am.biblioteca.service;

import java.util.List;

import br.org.am.biblioteca.model.Usuario;

public interface UsuarioService {
    Usuario findById(String id);

    Usuario findByEmail(String email);

    List<Usuario> list();

    void save(Usuario usuario);

    void delete(Usuario usuario);
}
