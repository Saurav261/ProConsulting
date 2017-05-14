(function() {
    'use strict';
    
    angular.module('ProConsulting').component('appComponent', {
        transclude: true,
        templateUrl: 'src/app.component.html',
        controller: controller 
    });
           
    controller.$inject = ['$log', '$scope', '$rootScope', '$uibModal'];
    
    function controller($log, $scope, $rootScope, $uibModal) {
        var $ctrl = this;
        
        
        $ctrl.$onInit = function() {
            
            
        };
        
        //TO DO - MODAL COMPONENT
        //Modal component reference: https://angular-ui.github.io/bootstrap/#/modal
        $ctrl.openSignUpModal = openSignUpModal;
        function openSignUpModal() {
            console.log(" Inside openSignupModal");
            var modalInstance = $uibModal.open({
              animation: $ctrl.animationsEnabled,
              component: 'signUpModalComponent',
              resolve: {
                
              }
            });

            modalInstance.result.then(function () {
                
            }, function () {
              $log.info('modal-component dismissed at: ' + new Date());
            });
        };
        
        
         $ctrl.openLogInModal = openLogInModal;
        function openLogInModal() {
            console.log(" Inside openLogInModal");
            var modalInstance = $uibModal.open({
              animation: $ctrl.animationsEnabled,
              component: 'loginModalComponent',
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