var myAppControllers = angular.module('myAppControllers', []);
myAppControllers.controller('user_profile',function($scope,$http){
$scope.test ="hey";
$scope.githubId="";
$scope.getProfile = function()
{$scope.data="";
$http({method: 'GET', url: 'https://api.github.com/users/'+$scope.githubId}).
  success(function(data, status, headers, config) {
console.log(data);
$scope.data=data;
$scope.data= angular.fromJson(data);

  }).
  error(function(data, status, headers, config) {
$scope.data="You entered a wrong id!"
  });

};


});
