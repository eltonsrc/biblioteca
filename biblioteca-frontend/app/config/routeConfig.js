angular.module("biblioteca").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/login.html",
		controller: "loginCtrl",
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
		controller: "homeCtrl",
	});
	$routeProvider.when("/usuario/incluir", {
		templateUrl: "view/usuarioForm.html",
		controller: "homeCtrl",
	});
	$routeProvider.when("/usuario", {
		templateUrl: "view/usuarioList.html",
		controller: "homeCtrl",
	});
	$routeProvider.otherwise({redirectTo: "/"});
}]);