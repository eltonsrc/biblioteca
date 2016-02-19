package br.org.am.biblioteca.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import org.springframework.stereotype.Controller;

@Controller
@Path("/")
public class InfoController extends BaseRestController {
    @GET
    @Path("/info")
    public Response info() {
        return Response.status(200).entity("").build();
    }
}
