package br.org.am.biblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.org.am.biblioteca.dao.DocumentoDAO;
import br.org.am.biblioteca.dao.GeneroDocumentalDAO;
import br.org.am.biblioteca.index.IndexException;
import br.org.am.biblioteca.index.interfaces.DocumentoSearchResponse;
import br.org.am.biblioteca.index.interfaces.IndexEngine;
import br.org.am.biblioteca.model.Documento;
import br.org.am.biblioteca.model.GeneroDocumental;

@Service
@Transactional
class DocumentoServiceImpl implements DocumentoService {
    private GeneroDocumentalDAO generoDocumentalDAO;
    private DocumentoDAO documentoDAO;
    private IndexEngine indexEngine;

    @Autowired
    public void setGeneroDocumentalDAO(GeneroDocumentalDAO generoDocumentalDAO) {
        this.generoDocumentalDAO = generoDocumentalDAO;
    }

    @Autowired
    public void setDocumentoDAO(DocumentoDAO documentoDAO) {
        this.documentoDAO = documentoDAO;
    }

    @Autowired
    public void setIndexEngine(IndexEngine indexEngine) {
        this.indexEngine = indexEngine;
    }

    public List<GeneroDocumental> listAllGeneroDocumental() {
        return generoDocumentalDAO.list();
    }

    public void save(Documento documento) throws IndexException {
        documentoDAO.save(documento);
        indexEngine.indexDocumento(documento);
    }

    public Documento findById(String id) {
        return documentoDAO.findById(id);
    }

    public Documento findByCodRef(String codRef) {
        return documentoDAO.findByCodRef(codRef);
    }

    public DocumentoSearchResponse searchDocumento(String query, int max, int offset)
            throws IndexException {
        return indexEngine.searchDocumento(query, max, offset, "tituloFormal");
    }
}
