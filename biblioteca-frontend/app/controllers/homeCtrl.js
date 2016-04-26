angular.module("biblioteca").controller("homeCtrl", ["$scope", "documentoService", function ($scope, documentoService) {
    var MAX = 10;
    $scope.buscar = function() {
        console.log('buscar');
        documentoService.searchDocumento($scope.query, MAX, 0, function (response) {
            console.log(response);
            $scope.documentos = null;
            $scope.total = 0;

            if (response.data) {
                $scope.documentos = response.data.documentoList;
                $scope.total = response.data.total;
            }
        }, function (response) {
            console.log(response);
        });
    };
}]);