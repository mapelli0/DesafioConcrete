"use restrict";
var DesafioApp;
(function (DesafioApp) {
    var Services;
    (function (Services) {
        var DesafioService = (function () {
            function DesafioService($http, $q, $filter) {
                this.urlPopular = "http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK";
                this.urlShot = "http://api.dribbble.com/shots/";
                this.$q = $q;
                this.$http = $http;
                this.$filter = $filter;
            }
            DesafioService.prototype.handlerErro = function (deferred, msg, code) {
                deferred.reject(msg);
            };
            DesafioService.prototype.get = function (url, sucess) {
                var deferred = this.$q.defer();
                this.$http.jsonp(url).success(sucess.bind(this, deferred)).error(this.handlerErro.bind(this, deferred));
                return deferred.promise;
            };
            DesafioService.prototype.buscaPaginaPopular = function (page) {
                var url = this.urlPopular + "&page=" + page;
                return this.get(url, this.paginaPopularSucess);
            };
            DesafioService.prototype.paginaPopularSucess = function (deferred, data) {
                deferred.resolve(this.CriarSessao(data));
            };
            DesafioService.prototype.CriarSessao = function (data) {
                var Pagina = new DesafioApp.Models.Pagina();
                Pagina.numero = data.page;
                angular.forEach(data.erros, function (erro) {
                    Pagina.erros.push(erro.mensagem);
                });
                angular.forEach(data.shots, function (script) {
                    var player = new DesafioApp.Models.Player(script.player.id, script.player.name, script.player.username, script.player.avatar_url);
                    var novoShot = new DesafioApp.Models.Shot(script.id, script.title, script.description, script.likes_count, script.image_url, player);
                    Pagina.Shots.push(novoShot);
                });
                return Pagina;
            };
            DesafioService.$inject = ["$resource", "$q"];
            return DesafioService;
        })();
        Services.DesafioService = DesafioService;
    })(Services = DesafioApp.Services || (DesafioApp.Services = {}));
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=DesafioService.js.map