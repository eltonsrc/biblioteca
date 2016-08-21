(function() {
    angular.module('biblioteca').factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location'];

    function authInterceptor($q, $location) {
        return {
            'responseError': function(response) {
                if (response.status == 401) {
                    $location.path("/");
                    return;
                }

                return $q.reject(response);
            }
        };
    }
})();