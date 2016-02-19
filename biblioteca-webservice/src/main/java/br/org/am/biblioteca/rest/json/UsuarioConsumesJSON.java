package br.org.am.biblioteca.rest.json;

import java.util.Set;

public class UsuarioConsumesJSON {
    private String id;
    private String nome;
    private String email;
    private String senha;
    private Set<String> grupos;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public Set<String> getGrupos() {
        return grupos;
    }

    public void setGrupos(Set<String> grupoList) {
        this.grupos = grupoList;
    }
}
