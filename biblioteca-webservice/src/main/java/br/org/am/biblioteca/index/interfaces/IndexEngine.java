package br.org.am.biblioteca.index.interfaces;

import br.org.am.biblioteca.index.IndexException;
import br.org.am.biblioteca.model.Documento;

public interface IndexEngine {
    void start() throws IndexException;

    void stop() throws IndexException;

    boolean indexDocumento(Documento documento) throws IndexException;

    boolean removeDocumento(Documento documento) throws IndexException;

    DocumentoSearchResponse searchDocumento(String query, int max, int offset,
            String... fieldNames) throws IndexException;

    long getTotalDocIndexed() throws IndexException;
}
