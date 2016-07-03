'use strict';

var myControllers = angular.module('myControllers', ['ngRoute']);

myControllers.controller('AboutController', ['$scope', '$route',
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;
	}
]);

myControllers.controller('PhotosController', ['$scope', '$route',
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;
	}
]);
