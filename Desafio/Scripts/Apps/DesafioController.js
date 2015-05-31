var DesafioApp;
(function (DesafioApp) {
    var Controllers;
    (function (Controllers) {
        var DesafioController = (function () {
            function DesafioController($scope, $state, $modal, sessionService, $filter, $sce) {
                this.shotSelecionado = DesafioApp.Models.Shot;
                this.sessionService = sessionService;
                this.$filter = $filter;
                this.$modal = $modal;
                this.session = new DesafioApp.Models.Session();
                this.shotSelecionado = null;
                $scope.viewModel = this;
                this.loading = false;
                this.scope = $scope;
            }
            DesafioController.prototype.carregarPagina = function (pagina) {
                this.session.Paginas.push(pagina);
                this.loading = false;
            };
            DesafioController.prototype.paginacao = function () {
                if (!this.loading) {
                    this.loading = true;
                    this.total = this.session.Paginas.length + 1;
                    this.sessionService.buscaPaginaPopular(this.total).then(this.carregarPagina.bind(this));
                }
            };
            DesafioController.prototype.open = function (shotSel) {
                this.shotSelecionado = shotSel;
                this.$modal.open({
                    animation: true,
                    templateUrl: 'templates/Detalhe.html',
                    controller: "DesafioApp.Controllers.ModalController",
                    scope: this.scope
                });
            };
            DesafioController.$inject = ["$scope", "$state", "$modal", "SessionService", "$filter", '$sce'];
            return DesafioController;
        })();
        Controllers.DesafioController = DesafioController;
    })(Controllers = DesafioApp.Controllers || (DesafioApp.Controllers = {}));
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=DesafioController.js.map