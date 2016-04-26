package br.org.am.biblioteca.index.elasticsearch;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.search.SearchHit;

import br.org.am.biblioteca.index.interfaces.DocumentoSearchResponse;
import br.org.am.biblioteca.model.Documento;
import br.org.am.biblioteca.model.IndexacaoDocumento;

class DocumentoSearchResponseElasticsearch implements DocumentoSearchResponse {
    private SearchResponse response;

    public DocumentoSearchResponseElasticsearch(SearchResponse response) {
        this.response = response;
    }

    @SuppressWarnings("unchecked")
    public List<Documento> getDocumentoList() {
        List<Documento> docList = new ArrayList<Documento>();
        SearchHit[] result = response.getHits().getHits();

        for (int i = 0; i < result.length; i++) {
            Map<String, Object> docMap = result[i].getSource();
            Documento documento = new Documento();
            documento.setCodRef((String) docMap.get("codRef"));
            documento.setDescr((String) docMap.get("descr"));
            documento.setId((String) docMap.get("id"));
            documento.setTituloAtribuido((String) docMap.get("tituloAtribuido"));
            documento.setTituloFormal((String) docMap.get("tituloFormal"));

            Map<String, Object> indexDocMap = (Map<String, Object>) docMap
                    .get("indexacaoDocumento");
            IndexacaoDocumento indexDoc = new IndexacaoDocumento();
            indexDoc.setId((String) indexDocMap.get("id"));
            indexDoc.setLocalizacaoInterna(
                    (String) indexDocMap.get("localizacaoInterna"));
            indexDoc.setNivelDescricao((String) indexDocMap.get("nivelDescricao"));

            documento.setIndexacaoDocumento(indexDoc);

            docList.add(documento);
        }

        return docList;
    }

    public Long getTotal() {
        return response.getHits().getTotalHits();
    }

}
