'use strict';

import Base from './base.js';
import _ from "underscore";
var logger = require('tracer').colorConsole();

export default class extends Base {

    async __before() {
        // let service = this.service("home/auth"),
        //     instance = new service(),
        //     status = await instance.status(); //校验是否登陆

        // if (status == "offline") {
        // 	this.redirect('/');
        // }
    }

    async indexAction() {
        this.assign({
            "title": "登录成功"
        });
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
            if (!status.result == "success") {
                this.assign({
                    "logoutError": status.info,
                    "title": "登录成功"
                });
                this.redirect('/');
            } else {
                this.assign({
                    "logoutError": status.info,
                    "title": "登录成功"
                });
                this.display('main/index');
            }
        } catch (e) {
            logger.error(e);
            this.assign({
                "logoutError": e.info,
                "title": "登录成功"
            });
            this.display('main/index');
        }
    }
}
