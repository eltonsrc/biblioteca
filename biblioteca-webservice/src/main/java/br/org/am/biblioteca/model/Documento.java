package br.org.am.biblioteca.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Documento extends BaseModel {
    private static final long serialVersionUID = 5267348545723975952L;

    private String codRef;
    private String tituloFormal;
    private String tituloAtribuido;
    private String descr;
    private Date dataProducao;
    private Date dataAcumulacao;
    private String dimensaoSuporte;
    private String nomeProdutores;
    private Date dataCriacao;
    private Date dataAtualizacao;
    private Usuario usuarioCriador;
    private Usuario usuarioAtualizador;
    private GeneroDocumental generoDocumental;
    private IndexacaoDocumento indexacaoDocumento;

    @Column(nullable = false, unique = true, length = 255)
    public String getCodRef() {
        return codRef;
    }

    public void setCodRef(String codRef) {
        this.codRef = codRef;
    }

    @Column(nullable = false, length = 255)
    public String getTituloFormal() {
        return tituloFormal;
    }

    public void setTituloFormal(String tituloFormal) {
        this.tituloFormal = tituloFormal;
    }

    @Column(nullable = false, length = 255)
    public String getTituloAtribuido() {
        return tituloAtribuido;
    }

    public void setTituloAtribuido(String tituloAtribuido) {
        this.tituloAtribuido = tituloAtribuido;
    }

    @Column(nullable = true, length = 4000)
    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    @Column(nullable = true)
    public Date getDataProducao() {
        return dataProducao;
    }

    public void setDataProducao(Date dataProducao) {
        this.dataProducao = dataProducao;
    }

    @Column(nullable = true)
    public Date getDataAcumulacao() {
        return dataAcumulacao;
    }

    public void setDataAcumulacao(Date dataAcumulacao) {
        this.dataAcumulacao = dataAcumulacao;
    }

    @Column(nullable = true, length = 255)
    public String getDimensaoSuporte() {
        return dimensaoSuporte;
    }

    public void setDimensaoSuporte(String dimensaoSuporte) {
        this.dimensaoSuporte = dimensaoSuporte;
    }

    @Column(nullable = true, length = 255)
    public String getNomeProdutores() {
        return nomeProdutores;
    }

    public void setNomeProdutores(String nomeProdutores) {
        this.nomeProdutores = nomeProdutores;
    }

    @Column(nullable = false)
    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    @Column(nullable = false)
    public Date getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(Date dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    @Column(nullable = false)
    public Usuario getUsuarioCriador() {
        return usuarioCriador;
    }

    public void setUsuarioCriador(Usuario usuarioCriador) {
        this.usuarioCriador = usuarioCriador;
    }

    @Column(nullable = false)
    public Usuario getUsuarioAtualizador() {
        return usuarioAtualizador;
    }

    public void setUsuarioAtualizador(Usuario usuarioAtualizador) {
        this.usuarioAtualizador = usuarioAtualizador;
    }

    @Column(nullable = false)
    public GeneroDocumental getGeneroDocumental() {
        return generoDocumental;
    }

    public void setGeneroDocumental(GeneroDocumental generoDocumental) {
        this.generoDocumental = generoDocumental;
    }

    @Column(nullable = false)
    public IndexacaoDocumento getIndexacaoDocumento() {
        return indexacaoDocumento;
    }

    public void setIndexacaoDocumento(IndexacaoDocumento indexacaoDocumento) {
        this.indexacaoDocumento = indexacaoDocumento;
    }
}
