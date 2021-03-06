package br.org.am.biblioteca.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.codehaus.jackson.map.annotate.JsonView;

import br.org.am.biblioteca.rest.json.View;

@Entity
public class Usuario extends BaseModel {
    private static final long serialVersionUID = -3385290898126479834L;

    public static final String USUARIO_ADMINISTRADOR = "administrador";

    @JsonView(View.Public.class)
    private String nome;
    @JsonView(View.Public.class)
    private String email;
    @JsonView(View.Private.class)
    private String senha;

    @JsonView(View.Public.class)
    private Set<Grupo> grupoSet = new HashSet<Grupo>(0);

    @Column(nullable = false, length = 255)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(nullable = false, unique = true, length = 255)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(nullable = false, length = 64)
    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    // Para este sistema o usu�rio n�o ter� muitos grupos e na maioria das vezes
    // ser� necess�rio saber a que grupo o usu�rio pertence, por isso optou-se
    // pro EAGER fetch. Se ocorrer problemas de desempenho, deve-se revisar o
    // FetchType.
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinTable(name = "usuario_grupo", joinColumns = {
            @JoinColumn(name = "usuario_id", nullable = false, updatable = false) }, inverseJoinColumns = {
                    @JoinColumn(name = "grupo_id", nullable = false, updatable = false) })
    public Set<Grupo> getGrupoSet() {
        return grupoSet;
    }

    public void setGrupoSet(Set<Grupo> grupoSet) {
        this.grupoSet = grupoSet;
    }
}
