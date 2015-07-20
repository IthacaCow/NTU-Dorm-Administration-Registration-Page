'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('dorm', [
  'ngRoute',
  'ui.grid'
]).
config(function($routeProvider,$locationProvider) {
  
  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });

  $routeProvider.when('/', {
      
    templateUrl: 'partials/layout/body.html' ,
      
  }).when('/statistics', {
      
    templateUrl: 'partials/common/statistics.html' 
      
  }).when('/trouble-shooting', {
      
    templateUrl: 'partials/common/trouble-shooting.html' 
      
  }).when('/login', {
      
    templateUrl: 'partials/common/login.html' ,
    controller: 'LoginController',
    controllerAs: 'login'
      
  }).when('/admin/login', {
      
    templateUrl: 'partials/admin/login.html' 
      
  }).when('/users/list', {
      
    templateUrl:  'partials/users/list.html' ,
    controller:   'UserListController',
    controllerAs: 'list'
      
  }).when('partials/users/profile/:id', {
      
    templateUrl: 'partials/users/profile.html' ,
    controller: 'UserProfileController',
    controllerAs: 'profile'
      
  }).otherwise({
      
    redirectTo: '/'
      
  });

  

});



app.controller( 'LoginController', function( $scope, $routeParams, $http){
    
});



var fields = {
    identity:'身份',
    name:'姓名',
    account:'帳號',
    email:'E-mail',
    dorm:'宿舍',
    room:'房號',
    MAC:'MAC 卡號',
    phone:'電話',
    IP:'IP' 
};
var display_fields = [ 'name','account','dorm','room','IP' ];

app.controller( 'UserListController',['$scope', '$http', function($scope,$http){
	$scope.gridOptions = {
		enableGridMenu: true
	};
	$http.get('/data/userData.json')
			.success(function(data) {
				$scope.gridOptions.data = data;
	});
}]);

/*
app.controller( 'UserListController', function(DTOptionsBuilder, DTColumnBuilder){
    this.dtOptions = DTOptionsBuilder.fromSource('userData.json')
    	.withPaginationType('full_numbers');

    this.dtColumns = [];
	for (var field in display_fields) {
		this.dtColumns.push( 
			DTColumnBuilder.newColumn(field).withTitle(fields[field])
		);
	};
	
});
*/





app.controller( 'UserProfileController', function( $scope, $routeParams, $http){
    
});