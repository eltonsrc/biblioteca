angular.module("biblioteca").factory("usuarioService", ["$http", "serverConstants", function ($http, serverConstants) {
	var _saveUsuario = function(usuario, success, failure) {
		if (usuario.id) {
			$http.put(serverConstants.URL + "/usuario", usuario).then(success, failure);
		} else {
			$http.post(serverConstants.URL + "/usuario", usuario).then(success, failure);
		}
	};

	var _getUsuario = function(id, success, failure) {
		if (id) {
			return $http.get(serverConstants.URL + "/usuario/" + id).then(success, failure);
		} else {
			// pega lista de usuários
			return $http.get(serverConstants.URL + "/usuario").then(success, failure);
		}
	};

	var _deleteUsuario = function(id, success, failure) {
		$http.delete(serverConstants.URL + "/usuario/" + id).then(success, failure);
	};

	return {
		saveUsuario: _saveUsuario,
		getUsuario: _getUsuario,
		deleteUsuario: _deleteUsuario
	};
}]);