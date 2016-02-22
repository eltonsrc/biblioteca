package br.org.am.biblioteca.rest;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.shiro.crypto.hash.Sha256Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;
import br.org.am.biblioteca.rest.json.View;
import br.org.am.biblioteca.service.GrupoService;

@Controller
@Path("usuario")
public class UsuarioController extends BaseRestController {
    private GrupoService grupoService;

    @Autowired
    public void setGrupoService(GrupoService grupoService) {
        this.grupoService = grupoService;
    }

    @GET
    @Path("/")
    @Produces(MediaType.APPLICATION_JSON)
    public Response listUsuario() {
        return Response.status(200)
                .entity(parseToJson(usuarioService.list(), View.Public.class)).build();
    }

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createUsuario(Usuario usuario) {
        saveUsuario(usuario);
        return Response.status(200).entity("").build();
    }

    @PUT
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateUsuario(Usuario usuario) {
        saveUsuario(usuario);
        return Response.status(200).entity("").build();
    }

    @DELETE
    @Path("/{id}")
    public Response deleteUsuario(@PathParam("id") String id) {
        if (!usuarioLogadoAdmin()) {
            return Response.status(401).entity("").build();
        }

        if (getUsuarioLogado().getId().equals(id)) {
            return Response.status(401).entity("").build();
        }

        Usuario usuario = usuarioService.findById(id);
        usuarioService.delete(usuario);
        return Response.status(200).entity("").build();
    }

    private void saveUsuario(Usuario usuario) {
        Set<Grupo> grupoSet = new HashSet<Grupo>();
        for (Grupo grupo : usuario.getGrupoSet()) {
            grupoSet.add(grupoService.findByNome(grupo.getNome()));
        }

        usuario.setGrupoSet(grupoSet);
        usuario.setSenha(new Sha256Hash(usuario.getSenha()).toHex());

        usuarioService.save(usuario);
    }
}