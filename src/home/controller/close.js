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
            "title": "注销账户"
        });
        return this.display();
    }

    async closeAction() {
        if (this.isGet()) {
            return this.redirect("/");
        }
        let post = this.post();
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.unregister(post.account);
            if (status == "success") {
                return this.redirect('/index');
            } else {
                this.assign({
                    "closeError": status,
                    "title": "注册账户"
                });
                return this.display('close/index');
            }
        } catch (e) {
            logger.error(e);
            this.assign({
                "closeError": e,
                "title": "注册账户"
            });
            return this.display('close/index');
        }
    }
}
