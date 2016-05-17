'use strict';

import Base from './base.js';
var logger = require('tracer').colorConsole();

export default class extends Base {
	async __before() {
		let service = this.service("home/auth"),
			instance = new service(),
			status = await instance.status(); //校验是否登陆

		// if (status == "offline") {
		// 	this.redirect('/');
		// }
	}

	async indexAction() {
		return this.display();
	}

	async logoutAction() {
		if (this.isGet()) {
			return this.display();
		}
		let post = this.post(),
			ip = this.ip(),
			service = this.service("home/auth"),
			instance = new service();
		try {
			let status = await instance.logout(ip);
			if (!status == "success") {
				this.redirect('/');
			} else {
				this.assign("logoutError", "登出失败，请重试！");
				this.display('main/index');
			}
		} catch (e) {
			logger.error(e);
			this.assign("logoutError", e);
			this.display('main/index');
		}
	}
}
