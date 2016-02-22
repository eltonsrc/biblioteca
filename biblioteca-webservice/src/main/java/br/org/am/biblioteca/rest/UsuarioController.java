package br.org.am.biblioteca.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.org.am.biblioteca.model.Usuario;
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
    public Response createUsuario(Usuario usuario) {
        // TODO: reimplementar este método.
        return Response.status(200).entity("").build();
    }
}
