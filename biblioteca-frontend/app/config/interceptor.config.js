(function() {
    angular.module('biblioteca').config(registerInterceptors);

    registerInterceptors.$inject = ['$httpProvider'];

    function registerInterceptors($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    }
})();