package br.org.am.biblioteca.rest.json;

import java.util.HashSet;
import java.util.Set;

import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;

public class UsuarioViewJSON {
    private Usuario usuario;
    private Set<String> grupoList;

    public UsuarioViewJSON(Usuario usuario) {
        this.usuario = usuario;

        grupoList = new HashSet<String>();

        for (Grupo grupo : usuario.getGrupoSet()) {
            grupoList.add(grupo.getNome());
        }
    }

    public String getNome() {
        return usuario.getNome();
    }

    public String getEmail() {
        return usuario.getEmail();
    }

    public Set<String> getGrupoList() {
        return grupoList;
    }
}
