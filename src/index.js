'use strict';

'use strict';

define(function (require)
{
	var angular = require('angular');
	require('angular-ui-router');
	require('angular-sanitize');
	require('angular-bootstrap');

	var app = angular.module('heros-vs-hackers-bc-challenge', ['ngSanitize', 'ui.router', 'ui.bootstrap']);

	app.config(['$stateProvider', '$urlRouterProvider',
		function (stateProvider, urlRouterProvider)
		{
			stateProvider
				.state('welcome', {
					url: '/welcome',
					template: require('./welcome/welcome.html'),
					controller: ['$scope', require('./welcome/welcomeCtrl')],
					controllerAs: 'welcomeCtrl'
				});

			urlRouterProvider.otherwise('/welcome');

		}]);

});
