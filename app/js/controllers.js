'use strict';

var myControllers = angular.module('myControllers', ['ngRoute']);

// controller for about page
myControllers.controller('AboutController', ['$scope', '$route', '$location',
	function ($scope, $route, $location) {
		$scope.template = $route.current.templateUrl;
		$scope.pageClass = 'about';
	}
]);

// controller for photos page
myControllers.controller('PhotosController', ['$scope', '$route', '$http',
	function ($scope, $route, $http) {
		$scope.template = $route.current.templateUrl;
		$http.get('photos.json').then(function (response) {
			$scope.photos = response.data;
		});
		$scope.pageClass = 'photos';
	}
]);

// using tab in about page's side bar
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