/// <reference path="../typings/angular-ui/angular-ui-router.d.ts" />
module DesafioApp {
    "use strict";
    export class Configuracao {
        static $Inject = ["$stateProvider", "$urlRouterProvider", "$httpProvider"];

        constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $httpProvider: ng.IHttpProvider) {
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
    }

    export class Factory {
        static ServicoWrapper($http: ng.IHttpService, $q: ng.IQService, $filter: ng.IFilterService): DesafioApp.Services.DesafioService {
            var services = new Services.DesafioService($http, $q, $filter);
            return services;
        }
    }

    var modules = ["DesafioApp.Controllers", "DesafioApp.Services"];
    modules.forEach((modulo: any) => angular.module(modulo, []));    
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


}