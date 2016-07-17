'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    async indexAction() {
        //auto render template file index_index.html
        this.assign({
            "title": "重置密码"
        });
        return this.display();
    }

    async forgotAction() {
        if (this.isGet()) {
            return this.redirect("/");
        }
        let post = this.post();
        let service = this.service("home/register");
        let instance = new service();
        try {
            let status = await instance.modifypassword(post.account, post.newpassword);
            if (status.result == "success") {
                return this.redirect('/index');
            } else {
                this.assign({
                    "forgotError": status.info,
                    "title": "重置密码"
                });
                return this.display('forgot/index');
            }
        } catch (e) {
            logger.error(e);
            this.assign({
                "forgotError": e.info,
                "title": "重置密码"
            });
            return this.display('forgot/index');
        }
    }
}
