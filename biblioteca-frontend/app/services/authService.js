(function(){
	angular.module('biblioteca').factory('authService', authService);

	authService.$inject = ['$http', 'serverConstants', 'base64', 'session'];

	function authService($http, serverConstants, base64, session) {
		return {
			login: _login,
			isAuthenticated: _isAuthenticated,
			isAdmin: _isAdmin,
			logout: _logout
		};

		function _login(email, senha, success, failure) {
			$http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(email + ':' + senha);
			$http.get(serverConstants.URL + '/auth/login').then(function(response) {
				session.create(response.data);
				success(response);
			}, failure);
		};

		function _isAuthenticated() {
			return !!session.getUsuario();
		}

		function _isAdmin() {
			if (!_isAuthenticated()) {
				return false;
			}

			return session.getUsuario().grupoSet.find(function(grupo) {
				return grupo.nome == "admin";
			});
		}

		function _logout(success, failure) {
			$http.get(serverConstants.URL + '/auth/logout').then(function(response) {
				session.destroy();
				success(response);
			}, failure);
		};
	}
})();