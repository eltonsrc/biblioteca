angular.module("biblioteca").controller("usuarioController", ["$scope", "$location", "usuarioService", function ($scope, $location, usuarioService) {
	$scope.validSenha = true;
	$scope.grupo = [];

	$scope.saveUsuario = function() {
		var usuario = $scope.usuario;

		$scope.validSenha = usuario.senha == $scope.confSenha;

		if ($scope.validSenha) {
			if ($scope.isAdmin) {
				usuario.grupos = ["admin"];
			}

			usuarioService.saveUsuario(usuario, function(response) {
				var json = response.data;

				if (json.error) {
					alert(json.error.message);
				} else {
					//$location.path("/usuario/list");
				}
			}, function(response) {
				alert("Ocorreu um erro status: " + response.status);
			});
		}
	};
}]);