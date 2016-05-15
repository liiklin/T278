'use strict';

import Base from './base.js';
var logger = require('tracer').colorConsole();

export default class extends Base {
	async __before() {
		let service = this.service("home/auth"),
			instance = new service(),
			status = await instance.status(); //校验是否登陆

		if (status == "offline") {
			this.redirect('/');
		}
	}

	async indexAction() {
		logger.info("main");
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
			if (status == "success") {
				this.redirect('/');
			} else {
				mui.alert("下线不成功，请重试！");
				this.redirect('/main');
			}
		} catch (e) {
			logger.error(e);
			mui.alert("下线不成功，请重试！");
			this.redirect('/main');
		}
	}
}