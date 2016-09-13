package br.org.am.biblioteca.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;

import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;
import br.org.am.biblioteca.rest.json.View;

@Controller
@Path("/auth")
public class AuthController extends BaseRestController {
    @GET
    @Path("/login")
    @Produces(JSON_UTF8)
    public Response login() {
        Subject subject = SecurityUtils.getSubject();

        if (!subject.isAuthenticated()) {
            return Response.status(Status.UNAUTHORIZED).build();
        }

        return Response.status(Status.OK)
                .entity(parseToJson(getUsuarioLogado(), View.Public.class)).build();
    }

    @GET
    @Path("/logout")
    @Produces(JSON_UTF8)
    public Response logout() {
        SecurityUtils.getSubject().logout();
        return Response.ok().entity("").build();
    }

    @GET
    @Path("/admin")
    @Produces(JSON_UTF8)
    public Response isAdmin() {
        Usuario usuario = getUsuarioLogado();

        if (usuario == null) {
            return Response.status(401).entity("").build();
        }

        for (Grupo grupo : usuario.getGrupoSet()) {
            if (Grupo.GRUPO_ADMIN.equals(grupo.getNome())) {
                return Response.ok().entity(parseToJson(grupo, View.Public.class))
                        .build();
            }
        }

        return Response.status(401).entity("").build();
    }
}
