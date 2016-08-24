(function() {
    angular.module('biblioteca').service('session', session);

    session.$inject = ['$cookies'];

    function session($cookies) {
        this.create = function(usuario) {
            $cookies.putObject('usuario', usuario);
        };

        this.destroy = function() {
            $cookies.remove('usuario');
        };

        this.getUsuario = function() {
            return $cookies.getObject('usuario');
        };
    }
})();