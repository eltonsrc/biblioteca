angular.module("biblioteca").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/login.html",
		controller: "loginController",
	});
	$routeProvider.when("/home", {
		templateUrl: "view/home.html",
		controller: "homeCtrl",
	});
	$routeProvider.when("/documento/incluir", {
		templateUrl: "view/documentoForm.html",
		controller: "documentoController",
		resolve: {
			generoDocumentalList: ["documentoService", function(documentoService) {
				return documentoService.getGeneroList(function(response) {
					return response.data;
				});
			}],
			documento: function(){}
		}
	});
	$routeProvider.when("/documento/:id", {
		templateUrl: "view/documentoForm.html",
		controller: "documentoController",
		resolve: {
			generoDocumentalList: ["documentoService", function(documentoService) {
				return documentoService.getGeneroList(function(response) {
					return response.data;
				});
			}],
			documento: ["documentoService", "$route", function(documentoService, $route) {
				return documentoService.getDocumento($route.current.params.id, function(response) {
					return response.data;
				})
			}]
		}
	});
	$routeProvider.when("/usuario/list", {
		templateUrl: "view/usuarioList.html",
		controller: "usuarioController",
		resolve: {
			usuarioList: ["usuarioService", function (usuarioService) {
				return usuarioService.getUsuario(null, function(response) {
					return response.data;
				});
			}],
			usuario: function(){}
		}
	});
	$routeProvider.when("/usuario/incluir", {
		templateUrl: "view/usuarioForm.html",
		controller: "usuarioController",
		resolve: {
			usuarioList: function(){},
			usuario: function(){}
		}
	});
	$routeProvider.when("/usuario/:id", {
		templateUrl: "view/usuarioForm.html",
		controller: "usuarioController",
		resolve: {
			usuario: ["usuarioService", "$route", function (usuarioService, $route) {
				return usuarioService.getUsuario($route.current.params.id, function(response) {
					return response.data;
				});
			}],
			usuarioList: function(){}
		}
	});
	$routeProvider.when("/usuario", {
		templateUrl: "view/usuarioList.html",
		controller: "usuarioController",
	});
	$routeProvider.otherwise({redirectTo: "/"});
}]);