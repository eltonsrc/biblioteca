package br.org.am.biblioteca.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.stereotype.Controller;

@Controller
@Path("/auth")
public class AuthController {
    @GET
    @Path("/login")
    public Response login() {
        Subject subject = SecurityUtils.getSubject();
        if (subject.isAuthenticated()) {
            return Response.status(Status.OK).entity("").build();
        }

        return Response.status(Status.UNAUTHORIZED).build();
    }

    @GET
    @Path("/logout")
    public Response logout() {
        SecurityUtils.getSubject().logout();
        return Response.ok().entity("").build();
    }
}
