package br.org.am.biblioteca.index.interfaces;

import java.util.List;

import br.org.am.biblioteca.model.Documento;

public interface DocumentoSearchResponse {
    List<Documento> getDocumentoList();

    Long getTotal();
}
