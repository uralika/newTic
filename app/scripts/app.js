//'use strict';

angular.module('newTicApp', ['firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'TicTacCtrl'
      })
      .when('/directives', {
        templateUrl: 'views/directives.html',
        controller: 'DirectivesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

