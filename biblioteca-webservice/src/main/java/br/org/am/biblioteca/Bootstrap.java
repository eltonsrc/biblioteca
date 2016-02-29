package br.org.am.biblioteca;

import javax.annotation.PostConstruct;

import org.apache.shiro.crypto.hash.Sha256Hash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionStatus;
import org.springframework.transaction.support.TransactionCallbackWithoutResult;
import org.springframework.transaction.support.TransactionTemplate;

import br.org.am.biblioteca.dao.GeneroDocumentalDAO;
import br.org.am.biblioteca.dao.GrupoDAO;
import br.org.am.biblioteca.dao.UsuarioDAO;
import br.org.am.biblioteca.model.GeneroDocumental;
import br.org.am.biblioteca.model.Grupo;
import br.org.am.biblioteca.model.Usuario;

/**
 * Classe usada para iniciar valores no banco de dados. N�O confundir com o
 * framework front-end Bootstrap.
 *
 */
@Component
class Bootstrap {
    private PlatformTransactionManager transactionManager;
    private GrupoDAO grupoDAO;
    private UsuarioDAO usuarioDAO;
    private GeneroDocumentalDAO generoDocumentalDAO;

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

    @Autowired
    public void setGeneroDocumentalDAO(GeneroDocumentalDAO generoDocumentalDAO) {
        this.generoDocumentalDAO = generoDocumentalDAO;
    }

    /**
     * Anota��o PostConstruct usada para executar o m�todo logo ap�s a cria��o
     * deste bean. � necess�rio criar uma transa��o manualmente pois o spring
     * ainda n�o consegue criar automaticamente nesse ponto(PostConstruct).
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
        Grupo grupo = grupoDAO.findByNome(Grupo.GRUPO_ADMIN);

        if (grupo == null) {
            grupo = new Grupo();
            grupo.setNome(Grupo.GRUPO_ADMIN);
            grupoDAO.save(grupo);
        }

        Usuario usuario = usuarioDAO.findByEmail(Usuario.USUARIO_ADMINISTRADOR);

        if (usuario == null) {
            usuario = new Usuario();
            usuario.setNome("Administrador");
            usuario.setEmail(Usuario.USUARIO_ADMINISTRADOR);
            // alterar esta senha quando em produ��o
            usuario.setSenha(new Sha256Hash("123456").toHex());
            usuario.getGrupoSet().add(grupo);
            usuarioDAO.save(usuario);
        }

        if (generoDocumentalDAO.count() == 0) {
            generoDocumentalDAO.save(new GeneroDocumental("Audiovisual"));
            generoDocumentalDAO.save(new GeneroDocumental("Bibliográfico"));
            generoDocumentalDAO.save(new GeneroDocumental("Cartográfico"));
            generoDocumentalDAO.save(new GeneroDocumental("Iconográfico"));
            generoDocumentalDAO.save(new GeneroDocumental("Eletrônico"));
            generoDocumentalDAO.save(new GeneroDocumental("Textual"));
        }
    }
}
