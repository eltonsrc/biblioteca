package br.org.am.biblioteca.index.elasticsearch;

import java.net.InetAddress;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.codehaus.jackson.map.ObjectMapper;
import org.elasticsearch.action.count.CountResponse;
import org.elasticsearch.action.delete.DeleteResponse;
import org.elasticsearch.action.index.IndexResponse;
import org.elasticsearch.action.search.SearchRequestBuilder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.index.query.QueryBuilders;
import org.springframework.stereotype.Component;

import br.org.am.biblioteca.index.IndexException;
import br.org.am.biblioteca.index.interfaces.DocumentoSearchResponse;
import br.org.am.biblioteca.index.interfaces.IndexEngine;
import br.org.am.biblioteca.model.Documento;
import br.org.am.biblioteca.rest.json.View;

@Component
class ElasticSearchEngine implements IndexEngine {
    private static final Logger logger = LogManager.getLogger(ElasticSearchEngine.class);
    private static final String CLUSTER_NAME = "biblioteca";
    private static final String INDEX_NAME = "documentos";
    private static final String TYPE_NAME = "documento";

    private Client client;

    public void start() throws IndexException {
        try {
            Settings settings = Settings.settingsBuilder()
                    .put("cluster.name", CLUSTER_NAME).build();
            client = TransportClient.builder().settings(settings).build()
                    .addTransportAddress(new InetSocketTransportAddress(
                            InetAddress.getByName("localhost"), 9300));
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }
    }

    public void stop() throws IndexException {
        try {
            if (client != null) {
                client.close();
            }
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }
    }

    public boolean indexDocumento(Documento documento) throws IndexException {
        if (documento == null) {
            logger.debug("documento inválido");
            return false;
        }

        if (client == null) {
            logger.debug("client não iniciado.");
            return false;
        }

        ObjectMapper mapper = new ObjectMapper();
        byte[] docJson = null;
        try {
            docJson = mapper.writerWithView(View.Public.class)
                    .writeValueAsBytes(documento);
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }

        IndexResponse indexResponse = client
                .prepareIndex(INDEX_NAME, TYPE_NAME, documento.getId()).setSource(docJson)
                .get();
        if (indexResponse.isCreated()) {
            logger.debug("documento criado.");
        } else {
            logger.debug("documento atualizado.");
        }
        return true;
    }

    public DocumentoSearchResponse searchDocumento(String query, int max, int offset,
            String... fieldNames) throws IndexException {
        if (client == null) {
            logger.debug("client não iniciado.");
            return null;
        }

        try {
            SearchRequestBuilder srb = client.prepareSearch(INDEX_NAME)
                    .setTypes(TYPE_NAME).setFrom(offset).setSize(max);

            if (query != null && !query.isEmpty()) {
                srb.setQuery(QueryBuilders.multiMatchQuery(query, fieldNames));
            }

            final SearchResponse response = srb.execute().actionGet();
            return new DocumentoSearchResponseElasticsearch(response);
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }
    }

    public long getTotalDocIndexed() throws IndexException {
        if (client == null) {
            logger.debug("client não iniciado.");
            throw new IndexException("client não iniciado.");
        }

        try {
            CountResponse response = client.prepareCount(INDEX_NAME).execute()
                    .actionGet();
            logger.debug(response);
            return response.getCount();
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }
    }

    @Override
    public boolean removeDocumento(Documento documento) throws IndexException {
        try {
            DeleteResponse delete = client
                    .prepareDelete(INDEX_NAME, TYPE_NAME, documento.getId()).get();
            return delete.isFound();
        } catch (Exception e) {
            throw new IndexException(e.getMessage(), e);
        }
    }
}
