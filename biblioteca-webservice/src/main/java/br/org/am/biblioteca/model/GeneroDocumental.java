package br.org.am.biblioteca.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import org.codehaus.jackson.map.annotate.JsonView;

import br.org.am.biblioteca.rest.json.View;

@Entity
public class GeneroDocumental extends BaseModel {
    private static final long serialVersionUID = 5492994151006412760L;

    @JsonView(View.Public.class)
    private String genero;

    public GeneroDocumental() {
    }

    public GeneroDocumental(String genero) {
        this.genero = genero;
    }

    @Column(nullable = false, unique = true, length = 50)
    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }
}
