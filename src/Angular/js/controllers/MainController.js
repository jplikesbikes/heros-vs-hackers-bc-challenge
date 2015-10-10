(function() {
	'use strict';

	var MainController = function($scope, $http) {
		//TODO write code!
		console.log("main controller called!");
	};

	MainController.$inject = ['$scope', '$http'];
	angular.module('App').controller('MainController', MainController);

})();
