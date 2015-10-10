'use strict';

define(function(require){

	var Service = require('../components/dummyService');
	var service = new Service();

	var WelcomeCtrl = function()
	{
		this.message = service.doSomething();
	};

	return WelcomeCtrl;

});