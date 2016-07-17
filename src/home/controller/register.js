'use strict';

import Base from './base.js';
var logger = require('tracer').colorConsole();

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html
        this.assign({
            "title": "注册账户"
        });
        return this.display();
    }

    async idcheckerAction() {
        if (this.isGet()) {
            return this.redirect("/");
        }
        let post = this.post();
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.idchecker(post.account, post.password);
            if (status.result == "success") {
                return this.json({
                    status: status.result
                });
            } else {
                return this.fail(status);
            }
        } catch (e) {
            logger.error(e);
            return this.fail(e);
        }
    }

    async phonecheckerAction() {
        if (this.isGet()) {
            return this.redirect("/");
        }
        let post = this.post();
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.phonechecker(post.phone, post.code);
            if (status.result == "success") {
                return this.json({
                    status: status.result
                });
            } else {
                return this.fail(status);
            }
        } catch (e) {
            logger.error(e);
            return this.fail(e);
        }
    }


    async sendverifycodeAction() {
        if (this.isGet()) {
            return this.redirect("/");
        }
        let post = this.post();
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.sendverifycode(post.phone);
            if (status.result == "success") {
                return this.json({
                    status: status.result
                });
            } else {
                return this.fail(status);
            }
        } catch (e) {
            logger.error(e);
            return this.fail(e);
        }
    }

    async registerAction() {
        if (this.isGet()) {
            return this.redirect("/");
        }
        let post = this.post();
        logger.info(post);
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.register(post.account, post.phone, post.loginpwd);
            if (status.result == "success") {
                return this.json({
                    status: status.result,
                    info: status.info
                });
            } else {
                return this.fail({
                    status: status.result,
                    info: status.info
                });
            }
        } catch (e) {
            logger.error(e);
            return this.fail({
                status: e.result,
                info: e.info
            });
        }
    }
}
