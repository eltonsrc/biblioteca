(function() {
	angular.module('biblioteca').factory('documentoService', documentoService);

	documentoService.$inject = ['$http', 'serverConstants'];

	function documentoService($http, serverConstants) {
		return {
			saveDocumento: _saveDocumento,
			getDocumento: _getDocumento,
			deleteDocumento: _deleteDocumento,
			getGeneroList: _getGeneroList,
			searchDocumento: _searchDocumento
		};

		function _saveDocumento(documento, success, failure) {
			if (documento.id) {
				$http.put(serverConstants.URL + "/documento", documento).then(success, failure);
			} else {
				$http.post(serverConstants.URL + "/documento", documento).then(success, failure);
			}
		}

		function _getDocumento(id, success, failure) {
			if (id) {
				return $http.get(serverConstants.URL + "/documento/" + id).then(success, failure);
			} else {
				// pega lista de usuários
				return $http.get(serverConstants.URL + "/documento").then(success, failure);
			}
		}

		function _getGeneroList(success, failure) {
			return $http.get(serverConstants.URL + "/documento/generoList").then(success, failure);
		}

		function _deleteDocumento(id, success, failure) {
			$http.delete(serverConstants.URL + "/documento/" + id).then(success, failure);
		}

		function _searchDocumento(query, max, offset, success, failure) {
			$http.get(serverConstants.URL + "/documento/search", {
				params: {
					query: query,
					max: max,
					offset: offset
				}
			}).then(success, failure);
		}
	}
})();