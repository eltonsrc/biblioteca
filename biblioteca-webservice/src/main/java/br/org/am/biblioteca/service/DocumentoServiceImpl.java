package br.org.am.biblioteca.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.org.am.biblioteca.dao.DocumentoDAO;
import br.org.am.biblioteca.dao.GeneroDocumentalDAO;
import br.org.am.biblioteca.model.Documento;
import br.org.am.biblioteca.model.GeneroDocumental;

@Service
@Transactional
class DocumentoServiceImpl implements DocumentoService {
    private GeneroDocumentalDAO generoDocumentalDAO;
    private DocumentoDAO documentoDAO;

    @Autowired
    public void setGeneroDocumentalDAO(GeneroDocumentalDAO generoDocumentalDAO) {
        this.generoDocumentalDAO = generoDocumentalDAO;
    }

    @Autowired
    public void setDocumentoDAO(DocumentoDAO documentoDAO) {
        this.documentoDAO = documentoDAO;
    }

    public List<GeneroDocumental> listAllGeneroDocumental() {
        return generoDocumentalDAO.list();
    }

    public void save(Documento documento) {
        documentoDAO.save(documento);
    }

    public Documento findById(String id) {
        return documentoDAO.findById(id);
    }

    public Documento findByCodRef(String codRef) {
        return documentoDAO.findByCodRef(codRef);
    }
}
