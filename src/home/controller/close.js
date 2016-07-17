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
