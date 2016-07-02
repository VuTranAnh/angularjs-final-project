'use strict';

// Declare our `templateApp` and its depends.

var myApp = angular.module('myApp', [
	'ngRoute', // using for routing
	'myControllers', // module contains all my controller
]);

myApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/about', {
			templateUrl: 'view/about.html',
			controller: 'AboutController'
		})
		.otherwise({redirectTo: '/about'});
}]);