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
		controller: "homeCtrl",
	});
	$routeProvider.when("/usuario/list", {
		templateUrl: "view/usuarioList.html",
		controller: "usuarioController"
	});
	$routeProvider.when("/usuario/incluir", {
		templateUrl: "view/usuarioForm.html",
		controller: "usuarioController",
	});
	$routeProvider.when("/usuario", {
		templateUrl: "view/usuarioList.html",
		controller: "usuarioController",
	});
	$routeProvider.otherwise({redirectTo: "/"});
}]);