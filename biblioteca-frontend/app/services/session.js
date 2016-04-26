(function() {
    angular.module('biblioteca').service('session', session);

    session.$inject = [];

    function session() {
        this.create = function (usuario) {
            this.usuario = usuario;
        };

        this.destroy = function () {
            this.usuario = null;
        };
    }
})();