"use restrict";
module DesafioApp.Services {
    export class DesafioService {
        static $inject = ["$resource", "$q"];

        private urlPopular: string = "http://api.dribbble.com/shots/popular?callback=JSON_CALLBACK";
        private urlShot: string = "http://api.dribbble.com/shots/";


        private $http: ng.IHttpService;
        private $q: ng.IQService;        
        private $filter: ng.IFilterService;

        constructor($http: ng.IHttpService, $q: ng.IQService, $filter: ng.IFilterService) {            
            this.$q = $q;
            this.$http = $http;            
            this.$filter = $filter;
        }

        private handlerErro<T>(deferred: ng.IDeferred<T>, msg: string, code: string) {
            deferred.reject(msg);
        }


        private get<T>(url: string, sucess: any): ng.IPromise<T> {
            var deferred = this.$q.defer<T>();
            this.$http.jsonp(url).success(sucess.bind(this, deferred)).error(this.handlerErro.bind(this, deferred));
            return deferred.promise;
        }

        public buscaPaginaPopular(page): ng.IPromise<Models.Pagina>  {
            var url = this.urlPopular + "&page=" + page;
            return this.get<Models.Pagina>(url, this.paginaPopularSucess);
        }

        private paginaPopularSucess(deferred: ng.IDeferred<Models.Pagina>, data: any) {
            deferred.resolve(this.CriarSessao(data));
        }

        private CriarSessao(data: any): Models.Pagina {
            var Pagina = new Models.Pagina();
            Pagina.numero = data.page;
            
            angular.forEach(data.erros,(erro) => {
                Pagina.erros.push(erro.mensagem);
            });
           
            angular.forEach(data.shots,(script) => {
                var player = new Models.Player(script.player.id, script.player.name, script.player.username, script.player.avatar_url);

                var novoShot = new Models.Shot(script.id, script.title, script.description, script.likes_count, script.image_url, player);
                Pagina.Shots.push(novoShot);
            });

            return Pagina;
        }

    }
}