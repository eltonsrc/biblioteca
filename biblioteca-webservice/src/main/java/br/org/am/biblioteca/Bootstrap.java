package br.org.am.biblioteca;

import javax.annotation.PostConstruct;

import org.apache.shiro.crypto.hash.Sha256Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import br.org.am.biblioteca.dao.GrupoDAO;
import br.org.am.biblioteca.dao.UsuarioDAO;
import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;

/**
 * Classe usada para iniciar valores no banco de dados. NÂO confundir com o
 * framework front-end Bootstrap.
 *
 */
@Component
class Bootstrap {
    private PlatformTransactionManager transactionManager;
    private GrupoDAO grupoDAO;
    private UsuarioDAO usuarioDAO;

    @Autowired
    public void setTransactionManager(PlatformTransactionManager transactionManager) {
        this.transactionManager = transactionManager;
    }

    @Autowired
    public void setGrupoDAO(GrupoDAO grupoDAO) {
        this.grupoDAO = grupoDAO;
    }

    @Autowired
    public void setUsuarioDAO(UsuarioDAO usuarioDAO) {
        this.usuarioDAO = usuarioDAO;
    }

    /**
     * Anotação PostConstruct usada para executar o método logo após a criação
     * deste bean. É necessário criar uma transação manualmente pois o spring
     * ainda não consegue criar automaticamente nesse ponto(PostConstruct).
     * 
     * @throws Exception
     */
    @PostConstruct
    public void init() throws Exception {
        TransactionTemplate transactionTemplate = new TransactionTemplate(
                transactionManager);
        transactionTemplate.execute(new TransactionCallbackWithoutResult() {
            @Override
            protected void doInTransactionWithoutResult(TransactionStatus arg0) {
                criarAdminLogin();
            }
        });
    }

    private void criarAdminLogin() {
        Grupo grupo = grupoDAO.findByNome("admin");

        if (grupo == null) {
            grupo = new Grupo();
            grupo.setNome("admin");
            grupoDAO.save(grupo);
        }

        Usuario usuario = usuarioDAO.findByEmail("administrador");

        if (usuario == null) {
            usuario = new Usuario();
            usuario.setNome("Administrador");
            usuario.setEmail("administrador");
            // alterar esta senha quando em produção
            usuario.setSenha(new Sha256Hash("123456").toHex());
            usuario.getGrupoSet().add(grupo);
            usuarioDAO.save(usuario);
        }
    }
}
