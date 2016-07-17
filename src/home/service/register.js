'use strict';

import fetch from 'node-fetch';
var logger = require('tracer').colorConsole();

const baseUrl = 'http://202.115.80.149:8000',
    version = 'v1';

export default class extends think.service.base {
    init(...args) {
        super.init(...args);
    }
    async idchecker(cardid, password) {
        let url = `${baseUrl}/${version}/id_checker`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `cardid=${cardid}&password=${password}`
                })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        return reject("Bad response from server");
                    }
                    return response.json();
                })
                .then((status) => {
                    logger.info(status);
                    return resolve(status);
                })
                .catch((e) => {
                    logger.error(e);
                    return reject(e);
                });
        });
    }

    async sendverifycode(phone) {
        let url = `${baseUrl}/${version}/send_verifycode`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `phone=${phone}`
                })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        return reject("Bad response from server");
                    }
                    return response.json();
                })
                .then((status) => {
                    logger.info(status);
                    return resolve(status);
                })
                .catch((e) => {
                    logger.error(e);
                    return reject(e);
                });
        });
    }

    async phonechecker(phone, verifycode) {
        let url = `${baseUrl}/${version}/phone_checker`;
        logger.debug(url);
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `phone=${phone}&verifycode=${verifycode}`
                })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        return reject("Bad response from server");
                    }
                    return response.json();
                })
                .then((status) => {
                    logger.info(status);
                    return resolve(status);
                })
                .catch((e) => {
                    logger.error(e);
                    return reject(e);
                });
        });
    }

    async register(cardid, phone, password) {
        let url = `${baseUrl}/${version}/register`;
        logger.debug(url);
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `cardid=${cardid}&phone=${phone}&password=${password}`
                })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        return reject("Bad response from server");
                    }
                    return response.json();
                })
                .then((status) => {
                    logger.info(status);
                    return resolve(status);
                })
                .catch((e) => {
                    logger.error(e);
                    return reject(e);
                });
        });
    }

    async unregister(cardid) {
        let url = `${baseUrl}/${version}/unregister`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `cardid=${cardid}`
                })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        return reject("Bad response from server");
                    }
                    return response.json();
                })
                .then((status) => {
                    logger.info(status);
                    return resolve(status);
                })
                .catch((e) => {
                    logger.error(e);
                    return reject(e);
                });
        });
    }

    async modifypassword(cardid, password) {
        let url = `${baseUrl}/${version}/modify_password`;
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `cardid=${cardid}&password=${password}`
                })
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                        return reject("Bad response from server");
                    }
                    return response.json();
                })
                .then((status) => {
                    logger.info(status);
                    return resolve(status);
                })
                .catch((e) => {
                    logger.error(e);
                    return reject(e);
                });
        });
    }
}
