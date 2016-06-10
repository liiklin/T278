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
            if (status == "success") {
                return this.json({
                    status: status
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
            if (status == "success") {
                return this.json({
                    status: status
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
            let status = await instance.phonechecker(post.phone);
            if (status == "success") {
                return this.json({
                    status: status
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
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.phonechecker(post.account, post.phone, post.loginpwd);
            if (status == "success") {
                return this.redirect('/main');
            } else {
                this.assign({
                    "registerError": status,
                    "title": "注册账户"
                });
                return this.display('register/index');
            }
        } catch (e) {
            logger.error(e);
            this.assign({
                "registerError": e,
                "title": "注册账户"
            });
            return this.display('register/index');
        }
    }
}
