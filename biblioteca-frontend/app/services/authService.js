angular.module("biblioteca").factory("authService", ["$http", "serverConstants", "base64", function ($http, serverConstants, base64) {
	var _login = function (email, senha, success, failure) {
		$http.defaults.headers.common['Authorization'] = 'Basic ' + base64.encode(email + ':' + senha);
		$http.get(serverConstants.URL + "/auth/login").then(success, failure);
	};

	var _logout = function (success, failure) {
		$http.get(serverConstants.URL + "/auth/logout").then(success, failure);
	};

	return {
		login: _login,
		logout: _logout
	};
}]);