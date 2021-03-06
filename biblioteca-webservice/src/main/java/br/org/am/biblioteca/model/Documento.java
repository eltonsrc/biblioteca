package br.org.am.biblioteca.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.codehaus.jackson.map.annotate.JsonView;

import br.org.am.biblioteca.rest.json.View;

@Entity
public class Documento extends BaseModel {
    private static final long serialVersionUID = 5267348545723975952L;

    @JsonView(View.Public.class)
    private String codRef;
    @JsonView(View.Index.class)
    private String tituloFormal;
    @JsonView(View.Index.class)
    private String tituloAtribuido;
    @JsonView(View.Index.class)
    private String descr;
    @JsonView(View.Public.class)
    private Date dataProducao;
    @JsonView(View.Public.class)
    private String dimensaoSuporte;
    @JsonView(View.Index.class)
    private String nomeProdutores;
    @JsonView(View.Public.class)
    private Date dataCriacao;
    @JsonView(View.Public.class)
    private Date dataAtualizacao;
    @JsonView(View.Public.class)
    private Usuario usuarioCriador;
    @JsonView(View.Public.class)
    private Usuario usuarioAtualizador;
    @JsonView(View.Index.class)
    private GeneroDocumental generoDocumental;
    @JsonView(View.Index.class)
    private IndexacaoDocumento indexacaoDocumento;

    @Column(nullable = false, unique = true, length = 255)
    public String getCodRef() {
        return codRef;
    }

    public void setCodRef(String codRef) {
        this.codRef = codRef;
    }

    @Column(nullable = true, length = 255)
    public String getTituloFormal() {
        return tituloFormal;
    }

    public void setTituloFormal(String tituloFormal) {
        this.tituloFormal = tituloFormal;
    }

    @Column(nullable = true, length = 255)
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

    @Column(nullable = true)
    public Date getDataCriacao() {
        return dataCriacao;
    }

    public void setDataCriacao(Date dataCriacao) {
        this.dataCriacao = dataCriacao;
    }

    @Column(nullable = true)
    public Date getDataAtualizacao() {
        return dataAtualizacao;
    }

    public void setDataAtualizacao(Date dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }

    @ManyToOne(optional = false)
    public Usuario getUsuarioCriador() {
        return usuarioCriador;
    }

    public void setUsuarioCriador(Usuario usuarioCriador) {
        this.usuarioCriador = usuarioCriador;
    }

    @ManyToOne(optional = false)
    public Usuario getUsuarioAtualizador() {
        return usuarioAtualizador;
    }

    public void setUsuarioAtualizador(Usuario usuarioAtualizador) {
        this.usuarioAtualizador = usuarioAtualizador;
    }

    @ManyToOne(optional = true)
    public GeneroDocumental getGeneroDocumental() {
        return generoDocumental;
    }

    public void setGeneroDocumental(GeneroDocumental generoDocumental) {
        this.generoDocumental = generoDocumental;
    }

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    public IndexacaoDocumento getIndexacaoDocumento() {
        return indexacaoDocumento;
    }

    public void setIndexacaoDocumento(IndexacaoDocumento indexacaoDocumento) {
        this.indexacaoDocumento = indexacaoDocumento;
    }
}
