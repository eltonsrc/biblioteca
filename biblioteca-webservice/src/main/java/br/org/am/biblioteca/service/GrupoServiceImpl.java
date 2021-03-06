package br.org.am.biblioteca.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.org.am.biblioteca.dao.GrupoDAO;
import br.org.am.biblioteca.model.Grupo;

@Service
@Transactional
class GrupoServiceImpl implements GrupoService {
    private GrupoDAO grupoDAO;

    @Autowired
    public void setGrupoDAO(GrupoDAO grupoDAO) {
        this.grupoDAO = grupoDAO;
    }

    public Grupo findByNome(String nome) {
        return grupoDAO.findByNome(nome);
    }
}
