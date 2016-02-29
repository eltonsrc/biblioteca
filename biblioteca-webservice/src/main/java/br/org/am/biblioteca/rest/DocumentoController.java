package br.org.am.biblioteca.rest;

import java.util.Date;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import br.org.am.biblioteca.model.Documento;
import br.org.am.biblioteca.model.IndexacaoDocumento;
import br.org.am.biblioteca.rest.json.ErrorJson;
import br.org.am.biblioteca.rest.json.View;
import br.org.am.biblioteca.service.DocumentoService;

@Controller
@Path("/documento")
public class DocumentoController extends BaseRestController {
    private DocumentoService documentoService;

    @Autowired
    public void setDocumentoService(DocumentoService documentoService) {
        this.documentoService = documentoService;
    }

    @GET
    @Path("/generoList")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getGeneroList() {
        return Response.status(200)
                .entity(parseToJson(documentoService.listAllGeneroDocumental(),
                        View.Public.class))
                .build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getDocumento(@PathParam("id") String id) {
        Documento doc = documentoService.findById(id);
        return Response.status(200).entity(parseToJson(doc, View.Public.class)).build();
    }

    @POST
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response createDocumento(Documento documento) {
        documento.setUsuarioCriador(getUsuarioLogado());
        documento.setDataCriacao(new Date());
        return saveDocumento(documento);
    }

    @PUT
    @Path("/")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateDocumento(Documento documento) {
        return saveDocumento(documento);
    }

    private Response saveDocumento(Documento documento) {
        Documento doc = documentoService.findByCodRef(documento.getCodRef());

        if (doc != null) {
            ErrorJson error = new ErrorJson(
                    "Já existe outro documento com este código de referência.");

            if (documento.getId() == null) {
                return Response.status(200).entity(error).build();
            } else if (!doc.getId().equals(documento.getId())) {
                return Response.status(200).entity(error).build();
            }
        }

        if (documento.getIndexacaoDocumento() == null) {
            documento.setIndexacaoDocumento(new IndexacaoDocumento());
        }

        documento.setUsuarioAtualizador(getUsuarioLogado());
        documento.setDataAtualizacao(new Date());

        documentoService.save(documento);
        return Response.status(200).entity("").build();
    }
}
