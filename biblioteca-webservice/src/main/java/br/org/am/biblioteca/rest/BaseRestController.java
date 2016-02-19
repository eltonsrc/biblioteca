package br.org.am.biblioteca.rest;

import org.apache.shiro.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;

import br.org.am.biblioteca.model.Usuario;
import br.org.am.biblioteca.service.UsuarioService;

public class BaseRestController {
    protected static final String APPLICATION_JSON = "application/json";

    protected UsuarioService usuarioService;

    @Autowired
    public void setUsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    protected Usuario getUsuarioLogado() {
        String email = SecurityUtils.getSubject().getPrincipal().toString();
        return usuarioService.findByEmail(email);
    }
}
