angular.module("biblioteca").controller("documentoController", ["$scope", "$location", "documentoService", "generoDocumentalList", "documento", "$filter", function ($scope, $location, documentoService, generoDocumentalList, documento, $filter) {
	var parseStringToDate = function (input) {
		var parts = input.split('/');
  		// new Date(year, month [, day [, hours[, minutes[, seconds[, ms]]]]])
  		// Note: months are 0-based
  		return new Date(parts[2], parts[1]-1, parts[0]);
  	};

  	var parseDateToString = function (date) {
  		return $filter('date')(date, "dd/MM/yyyy");
  	};

  	$scope.generoDocumentalList = generoDocumentalList;
  	$scope.documento = documento;

  	if ($scope.documento) {
  		if ($scope.documento.dataProducao) {
  			$scope.documento.dataProducao = parseDateToString($scope.documento.dataProducao);
  		}

  		if ($scope.documento.indexacaoDocumento.dataAcumulacao) {
  			$scope.documento.indexacaoDocumento.dataAcumulacao = parseDateToString($scope.documento.indexacaoDocumento.dataAcumulacao);
  		}
  	}

  	$scope.saveDocumento = function() {
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
  	};
  }]);