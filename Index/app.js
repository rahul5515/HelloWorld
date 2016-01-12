var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
  $http.get('todos.json')
       .then(function(res){
          $scope.todos = res.data;   
            
        });
});

 App.config(['$routeProvider', function($routeProvider)
 {  
  $routeProvider.     
when('/Add', 
{	
templateUrl: 'Add.html',	
controller: 'AddController'
      }).     
when('/Show', {
	templateUrl: 'Dashboard.html',	
controller: 'ShowOrdersController'
      }).     
when('/Dbhk', {
	templateUrl: 'DashboardHK.html',	
controller: 'DashboardHKController'
      })
.otherwise({
        redirectTo: ''
      });
}]);

App.controller('AddController', function($scope) {
	
	$scope.name = "Rahul";
	
});

App.controller('DashboardHKController', function($scope, $http) {
$http.get('todos.json')
       .then(function(res){

          $scope.todos = res.data;   
            
        });

});
