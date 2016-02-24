angular.module("biblioteca").controller("usuarioController", ["$scope", "$location", "usuarioService", "usuarioList", "usuario", function ($scope, $location, usuarioService, usuarioList, usuario) {
	$scope.validSenha = true;
	$scope.grupo = [];

	$scope.usuarioList = usuarioList;
	$scope.usuario = usuario;

	var verifyUsuarioAdmin = function(usuario) {
		if (usuario) {
			if (usuario.grupoSet) {
				return usuario.grupoSet.find(function(grupo) {
					return grupo.nome == "admin";
				});
			}
		}

		return false;
	};

	var carregarUsuarioList = function() {
		usuarioService.getUsuario(undefined, function(response) {
			$scope.usuarioList = response.data;
		}, function(response) {
			alert("Erro status: " + response.status);
		});
	};

	$scope.saveUsuario = function() {
		var usuario = $scope.usuario;

		$scope.validSenha = usuario.senha == $scope.confSenha;

		if ($scope.validSenha) {
			if ($scope.isAdmin) {
				usuario.grupoSet = [{nome: "admin"}];
			} else {
				delete usuario.grupoSet;
			}

			usuarioService.saveUsuario(usuario, function(response) {
				var json = response.data;

				if (json.error) {
					alert(json.error.message);
				} else {
					$location.path("/usuario/list");
				}
			}, function(response) {
				alert("Ocorreu um erro status: " + response.status);
			});
		}
	};

	$scope.deleteUsuario = function(id) {
		usuarioService.deleteUsuario(id, function(response) {
			carregarUsuarioList();
		}, function(response) {
			if (response.status == 401) {
				alert("Você não tem autorização para excluir este usuário.");
			} else {
				alert("Ocorreu um erro status: " + response.status);
			}
		});
	};

	if (verifyUsuarioAdmin($scope.usuario)) {
		$scope.isAdmin = true;
	}
}]);