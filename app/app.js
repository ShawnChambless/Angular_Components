angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
    
        .state('thumbnails', {
            url: '/thumbnails', 
            templateUrl: 'app/thumbnail/thumbnail.html'
        });
        
});