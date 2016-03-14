package br.org.am.biblioteca.index.elasticsearch;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.node.Node;
import org.elasticsearch.node.NodeBuilder;
import org.springframework.stereotype.Component;

import br.org.am.biblioteca.index.IndexException;
import br.org.am.biblioteca.index.interfaces.DocumentoSearchResponse;
import br.org.am.biblioteca.index.interfaces.IndexEngine;
import br.org.am.biblioteca.model.Documento;

@Component
class ElasticSearchEngine implements IndexEngine {
    private static final Logger logger = LogManager.getLogger(ElasticSearchEngine.class);
    private static final String CLUSTER_NAME = "biblioteca";
    private static final String INDEX_NAME = "documentos";
    private static final String TYPE_NAME = "documento";

    private Node node;

    public void start() throws IndexException {
        node = NodeBuilder.nodeBuilder().clusterName(CLUSTER_NAME).node();
    }

    public void stop() throws IndexException {
        if (node != null) {
            node.close();
        }
    }

    public boolean indexDocumento(Documento documento) throws IndexException {
        if (documento == null) {
            logger.debug("documento inválido");
            return false;
        }

        if (node == null) {
            logger.debug("node não iniciado.");
            return false;
        }

        ObjectMapper mapper = new ObjectMapper();
        byte[] docJson = null;
        try {
            docJson = mapper.writeValueAsBytes(documento);
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }

        Client client = node.client();
        IndexResponse indexResponse = client
                .prepareIndex(INDEX_NAME, TYPE_NAME, documento.getId()).setSource(docJson)
                .get();
        if (indexResponse.isCreated()) {
            logger.debug("documento criado.");
        } else {
            logger.debug("documento atualizado.");
        }
        client.close();
        return true;
    }

    public DocumentoSearchResponse searchDocumento(String query, int max, int offset,
            String... fieldNames) throws IndexException {
        if (query == null) {
            logger.debug("nada para procurar.");
            return null;
        }

        if (node == null) {
            logger.debug("node não iniciado.");
            return null;
        }

        Client client = node.client();
        SearchResponse response = client.prepareSearch(INDEX_NAME).setTypes(TYPE_NAME)
                .setQuery(QueryBuilders.multiMatchQuery(query, fieldNames))
                .setFrom(offset).setSize(max).execute().actionGet();
        client.close();
        // TODO: testar
        return null;
    }
}
