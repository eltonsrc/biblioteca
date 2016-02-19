package br.org.am.biblioteca.service;

import br.org.am.biblioteca.model.Usuario;

public interface UsuarioService {
    Usuario findByEmail(String email);
}
