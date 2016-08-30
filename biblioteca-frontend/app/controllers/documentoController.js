(function() {
  angular.module('biblioteca').controller('documentoController', documentoController);

  documentoController.$inject = ['$scope', '$location', 'documentoService', 'generoDocumentalList', 'documento', '$filter'];

  function documentoController($scope, $location, documentoService, generoDocumentalList, documento, $filter) {
    $scope.saveDocumento = saveDocumento;
    $scope.generoDocumentalList = generoDocumentalList;
    $scope.documento = documento;
    $scope.isSaving = false;

    activate();

    function activate() {
      if (!$scope.documento) {
        return;
      }

      if ($scope.documento.dataProducao) {
        $scope.documento.dataProducao = parseDateToString($scope.documento.dataProducao);
      }

      if ($scope.documento.indexacaoDocumento.dataAcumulacao) {
        $scope.documento.indexacaoDocumento.dataAcumulacao = parseDateToString($scope.documento.indexacaoDocumento.dataAcumulacao);
      }
    }

    function saveDocumento() {
      $scope.isSaving = true;
      var documento = angular.copy($scope.documento);

      if (documento.dataProducao) {
        documento.dataProducao = parseStringToDate(documento.dataProducao);
      }

      if (documento.indexacaoDocumento) {
        if (documento.indexacaoDocumento.dataAcumulacao) {
          documento.indexacaoDocumento.dataAcumulacao = parseStringToDate(documento.indexacaoDocumento.dataAcumulacao);
        }
      }

      documentoService.saveDocumento(documento, function(response) {
        $scope.isSaving = false;
        var json = response.data;

        if (json.error) {
          alert(json.error);
        } else {
          $location.path("/home");
        }
      }, function(response) {
        $scope.isSaving = false;
        alert("Ocorreu um erro status: " + response.status);
      });
    }

    function parseStringToDate(input) {
      var parts = input.split('/');
      // new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
      // Note: months are 0-based
      return new Date(parts[2], parts[1]-1, parts[0]);
    }

    function parseDateToString(date) {
      return $filter('date')(date, "dd/MM/yyyy");
    }
  }
})();