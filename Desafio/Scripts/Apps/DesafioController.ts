module DesafioApp.Controllers {
    export class DesafioController {
        static $inject = ["$scope", "$state", "$modal", "SessionService", "$filter", '$sce'];
        private sessionService: DesafioApp.Services.DesafioService;
        private session: Models.Session;
        private $filter: ng.IFilterService;
        private $modal: any;
        private loading: boolean;
        private total: number;
        private scope: any;
        private shotSelecionado = Models.Shot;
        
        constructor($scope: any, $state: ng.ui.IStateService, $modal: any ,sessionService: DesafioApp.Services.DesafioService, $filter: ng.IFilterService, $sce: any) {
            this.sessionService = sessionService;            
            this.$filter = $filter;
            this.$modal = $modal;
            this.session = new Models.Session(); 
            this.shotSelecionado = null;
            $scope.viewModel = this;
            this.loading = false;
            this.scope = $scope;
        }

        private carregarPagina(pagina: Models.Pagina) {            
            this.session.Paginas.push(pagina);
            this.loading = false;
        }

        public paginacao() {
            if (!this.loading) {
                this.loading = true;
                this.total = this.session.Paginas.length + 1;
                this.sessionService.buscaPaginaPopular(this.total).then(this.carregarPagina.bind(this));
            }
        }

        public open(shotSel) {
            this.shotSelecionado = shotSel;            
            this.$modal.open({               
                animation: true,
                templateUrl: 'templates/Detalhe.html',
                controller: "DesafioApp.Controllers.ModalController",
                scope: this.scope                
            });
        }


    }
} 