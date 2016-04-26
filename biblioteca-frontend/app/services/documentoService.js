angular.module("biblioteca").factory("documentoService", ["$http", "serverConstants", function ($http, serverConstants) {
	var _saveDocumento = function(documento, success, failure) {
		if (documento.id) {
			$http.put(serverConstants.URL + "/documento", documento).then(success, failure);
		} else {
			$http.post(serverConstants.URL + "/documento", documento).then(success, failure);
		}
	};

	var _getDocumento = function(id, success, failure) {
		if (id) {
			return $http.get(serverConstants.URL + "/documento/" + id).then(success, failure);
		} else {
			// pega lista de usuários
			return $http.get(serverConstants.URL + "/documento").then(success, failure);
		}
	};

	var _getGeneroList = function(success, failure) {
		return $http.get(serverConstants.URL + "/documento/generoList").then(success, failure);
	};

	var _deleteDocumento = function(id, success, failure) {
		$http.delete(serverConstants.URL + "/documento/" + id).then(success, failure);
	};

	var _searchDocumento = function(query, max, offset, success, failure) {
		$http.get(serverConstants.URL + "/documento/search", {
			params: {
				query: query,
				max: max,
				offset: offset
			}
		}).then(success, failure);
	};

	return {
		saveDocumento: _saveDocumento,
		getDocumento: _getDocumento,
		deleteDocumento: _deleteDocumento,
		getGeneroList: _getGeneroList,
		searchDocumento: _searchDocumento
	};
}]);