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