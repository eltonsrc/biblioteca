package br.org.am.biblioteca.service;

import java.util.List;

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

    public void save(Usuario usuario) {
        usuarioDAO.save(usuario);
    }

    public List<Usuario> list() {
        return usuarioDAO.list();
    }

    public void delete(Usuario usuario) {
        usuarioDAO.remove(usuario);
    }

    public Usuario findById(String id) {
        return usuarioDAO.findById(id);
    }
}
