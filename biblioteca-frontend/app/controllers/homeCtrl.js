angular.module("biblioteca").controller("homeCtrl", ["$scope", "documentoService", function ($scope, documentoService) {
    var MAX = 10;
    $scope.buscar = function(page) {
        if (!page) {
            page = 1;
        }

        var offset = MAX * (page-1);

        documentoService.searchDocumento($scope.query, MAX, offset, function (response) {
            $scope.documentos = null;
            $scope.total = 0;
            $scope.paginate = [];
            $scope.actualPage = page;

            if (response.data) {
                $scope.documentos = response.data.documentoList;
                $scope.total = response.data.total;
                montaPaginacao(MAX, $scope.total);
            }
        }, function (response) {
            console.log(response);
        });
    };

    var montaPaginacao = function(max, total) {
        var pages = total / max;

        if (pages < 1) {
            pages = 1;
        }

        for (var i = 1; i <= pages; i++) {
            $scope.paginate.push(i);
        }
    }
}]);