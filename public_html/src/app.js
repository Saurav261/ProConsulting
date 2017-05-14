angular.module('ProConsulting',['ui.router', 'ui.bootstrap']);

angular.module('ProConsulting').config(["$stateProvider", "$urlRouterProvider",
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/main/home");
        
        var mainPage = {
            name: 'main',
            abstract: true,
            url: '/main',
            component: 'appComponent'
        };
        
        var homePage = {
            name: 'main.home',
            url: '/home',
            component: 'homePageComponent'
        };
        
        $stateProvider.state(mainPage);
        $stateProvider.state(homePage);
}]);