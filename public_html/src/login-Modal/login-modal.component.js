(function() {
    'use strict';
  
    angular.module('ProConsulting').component('loginModalComponent', {
 
        templateUrl: 'src/login-Modal/login-modal.component.html',
        controller: controller,
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        }
    
    });
        
    controller.$inject = ['$log', '$sce', '$compile', '$scope', '$element'];  

    function controller($log, $sce, $compile, $scope, $element) {
       
        var $ctrl = this;
        
        $ctrl.$onInit = function () {
            $log.info("login modal component initialized!");
            
        };

        $ctrl.ok = function () {
            $ctrl.close();
        };

        $ctrl.cancel = function () {
          $ctrl.dismiss();
        };
        
      
    }
       
})();