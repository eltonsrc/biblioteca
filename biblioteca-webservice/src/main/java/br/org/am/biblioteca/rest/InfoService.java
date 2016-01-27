package br.org.am.biblioteca.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/")
public class InfoService {
    @GET
    @Path("/")
    public Response info() {
        return Response.status(200).entity("Teste: OK").build();
    }
}
