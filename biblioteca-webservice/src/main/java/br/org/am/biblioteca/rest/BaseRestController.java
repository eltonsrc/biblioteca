package br.org.am.biblioteca.rest;

import java.io.IOException;

import org.apache.shiro.SecurityUtils;
import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;

import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;
import br.org.am.biblioteca.service.UsuarioService;

public class BaseRestController {
    protected UsuarioService usuarioService;

    @Autowired
    public void setUsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    protected final Usuario getUsuarioLogado() {
        String email = SecurityUtils.getSubject().getPrincipal().toString();
        return usuarioService.findByEmail(email);
    }

    protected final boolean usuarioLogadoAdmin() {
        Usuario usuario = getUsuarioLogado();

        if (usuario == null || usuario.getGrupoSet() == null
                || usuario.getGrupoSet().isEmpty()) {
            return false;
        }

        for (Grupo grupo : usuario.getGrupoSet()) {
            if ("admin".equals(grupo.getNome())) {
                return true;
            }
        }

        return false;
    }

    /**
     * Por algum motivo(que ainda não entendi :P), a anotação JSONView não
     * funcionou automaticamente, por isso tenho que aplicar manualmente.
     * 
     * @param object
     * @param viewClass
     * @return
     */
    protected final String parseToJson(Object object, Class<?> viewClass) {
        ObjectMapper mapper = new ObjectMapper();

        try {
            return mapper.writerWithView(viewClass).writeValueAsString(object);
        } catch (JsonGenerationException e) {
            e.printStackTrace();
        } catch (JsonMappingException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "";
    }
}
