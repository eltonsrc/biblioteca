package br.org.am.biblioteca.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;

import br.org.am.biblioteca.rest.json.UsuarioJSON;

@Controller
@Path("/auth")
public class AuthController extends BaseRestController {
    @GET
    @Path("/login")
    @Produces(APPLICATION_JSON)
    public Response login() {
        Subject subject = SecurityUtils.getSubject();

        if (!subject.isAuthenticated()) {
            return Response.status(Status.UNAUTHORIZED).build();
        }

        return Response.status(Status.OK).entity(new UsuarioJSON(getUsuarioLogado()))
                .build();
    }

    @GET
    @Path("/logout")
    @Produces(APPLICATION_JSON)
    public Response logout() {
        SecurityUtils.getSubject().logout();
        return Response.ok().entity("").build();
    }
}
