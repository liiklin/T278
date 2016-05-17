'use strict';

var logger = require('tracer').colorConsole();

export default class extends think.controller.base {
	init(http) {
		super.init(http);
	}

	__before() {
		console.log("__before");
	}
}
