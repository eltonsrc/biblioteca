package br.org.am.biblioteca.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;

/**
 * Classe utilizada para saber o grupo(role) de acesso do usuário.
 *
 */
@Entity
public class Grupo extends BaseModel {
    private static final long serialVersionUID = -463493738204146130L;

    private String nome;
    private Set<Usuario> usuarioSet = new HashSet<Usuario>(0);

    @Column(nullable = false, length = 255, unique = true)
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @ManyToMany(fetch = FetchType.LAZY, mappedBy = "grupoSet")
    public Set<Usuario> getUsuarioSet() {
        return usuarioSet;
    }

    public void setUsuarioSet(Set<Usuario> usuarioSet) {
        this.usuarioSet = usuarioSet;
    }
}
