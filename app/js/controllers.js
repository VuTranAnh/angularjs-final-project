'use strict';

var myControllers = angular.module('myControllers', ['ngRoute']);

myControllers.controller('AboutController', ['$scope', '$route', '$location',
	function ($scope, $route, $location) {
		$scope.template = $route.current.templateUrl;
		$scope.isActive = function (viewLocation) {
     var active = (viewLocation === $location.path());
     return active;
		};
		console.log(2);
		console.log(3);
	}
]);

myControllers.controller('PhotosController', ['$scope', '$route',
	function ($scope, $route) {
		$scope.template = $route.current.templateUrl;
	}
]);

myControllers.controller('TabController', 
	function () {
		this.tab = 1;
		this.selectTab = function (setTab) {
			this.tab = setTab;
		};
		this.isSelected = function (checkTab) {
			return this.tab === checkTab;
		};
	} 
);