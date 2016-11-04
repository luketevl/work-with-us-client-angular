(function(){
  'use strict';

  angular.module('app').config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider){

    // Route AREAS
    $routeProvider.when('/areas', {
      templateUrl: '/views/areas/list.html',
      controller:  'appCtrl',
    });
    $routeProvider.when('/areas/:_id', {
      templateUrl: '/views/areas/form.html',
      controller:  'appCtrl',
    });

    $routeProvider.when('/candidates', {
      templateUrl: '/views/candidates/list.html',
      controller:  'appCtrl',
    });
    $routeProvider.when('/candidates/:_id', {
      templateUrl: '/views/candidates/form.html',
      controller:  'appCtrl',
    });

    $routeProvider.when('/', {
      templateUrl: '/views/body.html',
      controller:  'appCtrl',
    });

    // DEFAULT route
    $routeProvider.otherwise({redirectTo: '/'});
  }
})();
