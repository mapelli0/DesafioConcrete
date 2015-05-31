/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
var DesafioApp;
(function (DesafioApp) {
    "use strict";
    var Configuracao = (function () {
        function Configuracao($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            $stateProvider.state("#", {
                url: "/",
                views: {
                    "content": {
                        templateUrl: "templates/content.html",
                        controller: "DesafioApp.Controllers.DesafioController"
                    },
                    "detalhe": {
                        templateUrl: "templates/Detalhe.html",
                    }
                }
            });
            $urlRouterProvider.otherwise("/");
        }
        Configuracao.$Inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];
        return Configuracao;
    })();
    DesafioApp.Configuracao = Configuracao;
    var Factory = (function () {
        function Factory() {
        }
        Factory.ServicoWrapper = function ($http, $q, $filter) {
            var services = new DesafioApp.Services.DesafioService($http, $q, $filter);
            return services;
        };
        return Factory;
    })();
    DesafioApp.Factory = Factory;
    var modules = ["DesafioApp.Controllers", "DesafioApp.Services"];
    modules.forEach(function (modulo) { return angular.module(modulo, []); });
    modules.push("ngRoute");
    modules.push("ngAnimate");
    modules.push("infinite-scroll");
    modules.push("ui.router");
    modules.push("ui.bootstrap");
    modules.push("ngSanitize");
    var app = angular.module("DesafioApp", modules);
    app.factory("SessionService", ["$http", "$q", Factory.ServicoWrapper]);
    app.config(Configuracao);
    app.controller("DesafioApp.Controllers.DesafioController", DesafioApp.Controllers.DesafioController);
    app.controller("DesafioApp.Controllers.ModalController", DesafioApp.Controllers.ModalController);
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=DesafioApp.js.map