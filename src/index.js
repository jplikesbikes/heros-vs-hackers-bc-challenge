'use strict';

define(function(require){

	var Service = require('./components/dummyService');
	var service = new Service();

	var messagesContainer = document.getElementById('messages');

	function printMessage(value){
		var message = document.createElement('li');
		message.textContent = value;
		messagesContainer.appendChild(message);
	}

	printMessage(service.doSomething());

});