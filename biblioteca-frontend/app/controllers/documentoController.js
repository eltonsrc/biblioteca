(function() {
  angular.module('biblioteca').controller('documentoController', documentoController);

  documentoController.$inject = ['$location', 'documentoService', 'generoDocumentalList', 'documento', '$filter'];

  function documentoController($location, documentoService, generoDocumentalList, documento, $filter) {
    var vm = this;
    vm.saveDocumento = saveDocumento;
    vm.generoDocumentalList = generoDocumentalList;
    vm.documento = documento;

    activate();

    function activate() {
      if (!vm.documento) {
        return;
      }

      if (vm.documento.dataProducao) {
        vm.documento.dataProducao = parseDateToString(vm.documento.dataProducao);
      }

      if (vm.documento.indexacaoDocumento.dataAcumulacao) {
        vm.documento.indexacaoDocumento.dataAcumulacao = parseDateToString(vm.documento.indexacaoDocumento.dataAcumulacao);
      }
    }

    function saveDocumento() {
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
        var json = response.data;

        if (json.error) {
          alert(json.error);
        } else {
          $location.path("/home");
        }
      }, function(response) {
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