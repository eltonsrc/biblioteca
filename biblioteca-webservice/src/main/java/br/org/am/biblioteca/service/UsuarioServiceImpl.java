package br.org.am.biblioteca.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.org.am.biblioteca.dao.UsuarioDAO;
import br.org.am.biblioteca.model.Usuario;

@Service
@Transactional
class UsuarioServiceImpl implements UsuarioService {
    private UsuarioDAO usuarioDAO;

    @Autowired
    public void setUsuarioDAO(UsuarioDAO usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }

    public Usuario findByEmail(String email) {
        return usuarioDAO.findByEmail(email);
    }
}
