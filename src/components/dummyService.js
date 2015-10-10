'use strict';

define(function(require){

	/**
	 * @constructor
	 */
	var Service = function(){};

	Service.prototype.doSomething = function(){
		return 'I just did something';
	};

	return Service;
});