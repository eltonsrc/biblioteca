package br.org.am.biblioteca.index;

public class IndexException extends Exception {
    private static final long serialVersionUID = -6946987845587703082L;

    public IndexException(String msg) {
        super(msg);
    }

    public IndexException(String msg, Throwable throwable) {
        super(msg, throwable);
    }
}
