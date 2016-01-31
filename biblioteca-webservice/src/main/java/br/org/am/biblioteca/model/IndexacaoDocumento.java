package br.org.am.biblioteca.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class IndexacaoDocumento extends BaseModel {
    private static final long serialVersionUID = -9014389556865134215L;

    private String notasConservacao;
    private String notasGerais;
    private String palavrasChaves;
    private String localizacaoInterna;
    private String especieDocumental;
    private String nivelDescricao;

    @Column(nullable = true, length = 4000)
    public String getNotasConservacao() {
        return notasConservacao;
    }

    public void setNotasConservacao(String notasConservacao) {
        this.notasConservacao = notasConservacao;
    }

    @Column(nullable = true, length = 4000)
    public String getNotasGerais() {
        return notasGerais;
    }

    public void setNotasGerais(String notasGerais) {
        this.notasGerais = notasGerais;
    }

    @Column(nullable = true, length = 255)
    public String getPalavrasChaves() {
        return palavrasChaves;
    }

    public void setPalavrasChaves(String palavrasChaves) {
        this.palavrasChaves = palavrasChaves;
    }

    @Column(nullable = false, length = 255)
    public String getLocalizacaoInterna() {
        return localizacaoInterna;
    }

    public void setLocalizacaoInterna(String localizacaoInterna) {
        this.localizacaoInterna = localizacaoInterna;
    }

    @Column(nullable = false, length = 255)
    public String getEspecieDocumental() {
        return especieDocumental;
    }

    public void setEspecieDocumental(String especieDocumental) {
        this.especieDocumental = especieDocumental;
    }

    @Column(nullable = false, length = 255)
    public String getNivelDescricao() {
        return nivelDescricao;
    }

    public void setNivelDescricao(String nivelDescricao) {
        this.nivelDescricao = nivelDescricao;
    }
}
