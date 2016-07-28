angular.module('myApp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './views/home.html',
      controller: 'myCtrl',
      controllerAs: 'vm'
    })
    .when('/page1', {
      templateUrl: './views/page1.html',
      controller: 'myCtrl',
      controllerAs: 'vm'
    })
    .when('/page2', {
      templateUrl: './views/page2.html',
      controller: 'myCtrl',
      controllerAs: 'vm'
    })
    .otherwise({
      redirectTo: '/'
    });

}]) // End config
