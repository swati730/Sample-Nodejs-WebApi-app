var myApp = angular.module('myApp', [
      'ngRoute',
          'myAppControllers'
          ]);
myApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider
       .when('/user', {
         templateUrl: '/partials/user.html',
                controller: 'user_profile'
                })
      .otherwise({
                redirectTo: '/'
              });
        }]);
