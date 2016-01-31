package br.org.am.biblioteca.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class GeneroDocumental extends BaseModel {
    private static final long serialVersionUID = 5492994151006412760L;

    private String genero;

    @Column(nullable = false, unique = true, length = 50)
    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
}
