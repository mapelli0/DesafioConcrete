var DesafioApp;
(function (DesafioApp) {
    var Controllers;
    (function (Controllers) {
        var ModalController = (function () {
            function ModalController($scope, $state, $modalInstance, $filter) {
                this.$filter = $filter;
                this.$modal = $modalInstance;
                this.$scope = $scope;
            }
            ModalController.$inject = ["$scope", "$state", "$modalInstance", "$filter"];
            return ModalController;
        })();
        Controllers.ModalController = ModalController;
    })(Controllers = DesafioApp.Controllers || (DesafioApp.Controllers = {}));
})(DesafioApp || (DesafioApp = {}));
//# sourceMappingURL=ModalController.js.map