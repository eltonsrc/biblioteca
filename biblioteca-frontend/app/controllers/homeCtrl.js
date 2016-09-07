angular.module("biblioteca").controller("homeCtrl", ["$scope", "documentoService", function ($scope, documentoService) {
    var MAX = 10;
    $scope.formatDate = _formatDate;
    $scope.getDocumento = _getDocumento;
    $scope.buscar = _buscar;
    $scope.deleteDocumento = _deleteDocumento;

    _buscar();

    function _buscar(page) {
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

    function _getDocumento(id) {
        documentoService.getDocumento(id, function(response) {
            if (response.data) {
                $scope.viewDocumento = response.data;
            }
        }, function(response) {
            console.log(response);
        });
    }

    function _deleteDocumento(id) {
        if (!confirm('Tem certeza que deseja apagar este documento?')) {
            return;
        }

        documentoService.deleteDocumento(id, function(response) {
            _buscar();
            alert('Documento apagado');
        }, function(response) {
            console.log(response);
        });
    }

    function _formatDate(miliseconds) {
        if (!miliseconds) {
            return "";
        }

        var date = new Date(miliseconds);
        var month = date.getMonth() + 1;
        month = (month < 10)?"0" + month:month;
        return date.getDate() + "/" + month + "/" + date.getFullYear();
    }

    function montaPaginacao(max, total) {
        var pages = total / max;

        if (pages < 1) {
            pages = 1;
        }

        for (var i = 1; i <= pages; i++) {
            $scope.paginate.push(i);
        }
    }
}]);