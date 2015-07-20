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
