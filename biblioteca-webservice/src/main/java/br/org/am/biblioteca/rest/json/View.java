package br.org.am.biblioteca.rest.json;

/**
 * Para ser usada como view de JSON, filtrando os atributos das classes de
 * model.
 *
 */
public class View {
    public static class Index {
    }

    public static class Public extends Index {
    }

    public static class Private extends Public {
    }
}
