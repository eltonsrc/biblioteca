angular.module("biblioteca").factory("usuarioService", ["$http", "serverConstants", function ($http, serverConstants) {
	var _saveUsuario = function(usuario, success, failure) {
		if (usuario.id) {
			$http.put(serverConstants.URL + "/usuario", usuario).then(success, failure);
		} else {
			$http.post(serverConstants.URL + "/usuario", usuario).then(success, failure);
		}
	};

	return {
		saveUsuario: _saveUsuario
	};
}]);