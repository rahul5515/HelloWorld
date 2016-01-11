var App = angular.module('App', ['ngRoute']);

App.controller('TodoCtrl', function($scope, $http) {
  $http.get('todos.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});

 App.config(['$routeProvider', function($routeProvider)
 {  
  $routeProvider.     
when('/Details', 
{	
templateUrl: 'Details.html',	
controller: 'DetailsrController'
      }).     
when('/Index', {
	templateUrl: 'Index.html',	
controller: 'ShowOrdersController'
      })
}]);

App.controller('DetailsrController', function($scope) {
	
	$scope.name = "Rahul";
	
});


