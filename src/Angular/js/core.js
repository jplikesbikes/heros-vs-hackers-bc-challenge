(function() {
	'use strict';
	
	angular.module('App', ['Http']);

	angular.module('App').config(function($httpProvider) {
		$httpProvider.interceptors.push('HttpInterceptorService');
	});

})();