package br.org.am.biblioteca.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;
import br.org.am.biblioteca.rest.json.UsuarioConsumesJSON;
import br.org.am.biblioteca.service.GrupoService;

@Controller
@Path("usuario")
public class UsuarioController extends BaseRestController {
    private GrupoService grupoService;

    @Autowired
    public void setGrupoService(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @POST
    @Path("/")
    @Consumes(APPLICATION_JSON)
    public Response createUsuario(UsuarioConsumesJSON usuarioJSON) {
        Usuario usuario = new Usuario();
        usuario.setNome(usuarioJSON.getNome());
        usuario.setEmail(usuarioJSON.getEmail());
        usuario.setSenha(usuarioJSON.getSenha());

        for (String nomeGrupo : usuarioJSON.getGrupos()) {
            Grupo grupo = grupoService.findByNome(nomeGrupo);

            usuario.getGrupoSet().add(grupo);
        }

        usuarioService.save(usuario);

        return Response.status(200).entity("").build();
    }
}
