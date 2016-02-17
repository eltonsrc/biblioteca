angular.module("biblioteca").controller("loginController", ["$scope", "authService", "$location", function ($scope, authService, $location) {
	$scope.invalidLogin = false;

	$scope.login = function () {
		authService.login($scope.email, $scope.senha, function(response) {
			$location.path("/home");
		}, function(response) {
			$scope.invalidLogin = true;
		});
	};

	$scope.logout = function () {
		authService.logout(function(response) {
			$location.path("/");
		}, function(response) {
			alert("Erro na comunicação com o servidor.");
		});
	};
}]);