angular.module("biblioteca").config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/login.html",
		controller: "loginCtrl",
	});
	$routeProvider.when("/home", {
		templateUrl: "view/home.html",
		controller: "homeCtrl",
	});
	$routeProvider.otherwise({redirectTo: "/"});
}]);