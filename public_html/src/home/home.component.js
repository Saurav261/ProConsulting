(function() {
    'use strict';
    
    angular.module('ProConsulting').component('homePageComponent', {
        transclude: true,
        templateUrl: 'src/home/home.component.html',
        controller: controller 
    });
           
    controller.$inject = ['$log', '$scope', '$rootScope','$uibModal'];
    
    function controller($log, $scope, $rootScope,$uibModal) {
        var $ctrl = this;
        
        
        $ctrl.$onInit = function() {
            
            
        };
        
        
           $ctrl.openSearchModal = openSearchModal;
        function openSearchModal() {
            console.log(" Inside openSearchModal");
            var modalInstance = $uibModal.open({
              animation: $ctrl.animationsEnabled,
              component: 'searchModalComponent',
              resolve: {
                
              }
            });

            modalInstance.result.then(function () {
                
            }, function () {
              $log.info('modal-component dismissed at: ' + new Date());
            });
        };
        
    };
})();