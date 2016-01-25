angular.module("biblioteca").config(["$routeProvider", function ($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "view/login.html",
		controller: "loginCtrl",
	});
	$routeProvider.otherwise({redirectTo: "/"});
}]);