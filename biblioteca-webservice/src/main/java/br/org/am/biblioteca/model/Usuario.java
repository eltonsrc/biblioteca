package br.org.am.biblioteca.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Usuario extends BaseModel {
    private static final long serialVersionUID = -3385290898126479834L;

    private String nome;
    private String email;
    private String login;
    private String senha;

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

    @Column(nullable = false, unique = true, length = 255)
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Column(nullable = false, length = 255)
    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}
