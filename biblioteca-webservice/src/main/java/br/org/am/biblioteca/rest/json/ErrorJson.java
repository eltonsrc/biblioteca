package br.org.am.biblioteca.rest.json;

public class ErrorJson {
    private String error;

    public ErrorJson(String error) {
        this.error = error;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
