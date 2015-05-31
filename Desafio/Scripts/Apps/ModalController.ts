module DesafioApp.Controllers {
    export class ModalController {        
        static $inject = ["$scope", "$state", "$modalInstance", "$filter"];
        private $filter: ng.IFilterService;
        private $modal: any;        
        private $scope: any;        


        constructor($scope: any, $state: ng.ui.IStateService, $modalInstance: any, $filter: ng.IFilterService) {
            this.$filter = $filter;
            this.$modal = $modalInstance;
            this.$scope = $scope;
        }

    }
}