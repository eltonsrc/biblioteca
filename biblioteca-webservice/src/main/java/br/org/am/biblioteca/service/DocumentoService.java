package br.org.am.biblioteca.service;

import java.util.List;

import br.org.am.biblioteca.index.IndexException;
import br.org.am.biblioteca.index.interfaces.DocumentoSearchResponse;
import br.org.am.biblioteca.model.Documento;
import br.org.am.biblioteca.model.GeneroDocumental;

public interface DocumentoService {
    List<GeneroDocumental> listAllGeneroDocumental();

    Documento findById(String id);

    Documento findByCodRef(String codRef);

    void save(Documento documento) throws IndexException;

    void delete(Documento documento) throws IndexException;

    DocumentoSearchResponse searchDocumento(String query, int max, int offset)
            throws IndexException;
}
