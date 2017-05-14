(function() {
    'use strict';
    
    angular.module('ProConsulting').component('searchModalComponent', {
        transclude: true,
        templateUrl: 'src/SearchModal/search.modal.component.html',
        controller: controller,
            bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        }
    });
           
    controller.$inject = ['$log', '$scope', '$rootScope', '$uibModal'];
    
    function controller($log, $scope, $rootScope, $uibModal) {
        var $ctrl = this;
        
        
        $ctrl.$onInit = function() {
            
            
        };
   
          $ctrl.cancel = function () {
          $ctrl.dismiss();
        };
   
    };
})();

