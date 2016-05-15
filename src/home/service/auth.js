'use strict';

import fetch from 'node-fetch';
var logger = require('tracer').colorConsole();

const baseUrl = 'http://202.115.80.69:8000',
	version = 'v1';

export default class extends think.service.base {
	init(...args) {
		super.init(...args);
	}

	async auth(account, password, ip) {
		logger.info(account, password, ip);
		let url = `${baseUrl}/${version}/auth`;
		return new Promise((resolve, reject) => {
			fetch(url, {
					method: "POST",
					headers: {
					  "Content-Type": "application/x-www-form-urlencoded"
					},
					body: `username=${account}&password=${password}&userip=${ip}`
				})
				.then(function(response) {
					if (response.status >= 400) {
						throw new Error("Bad response from server");
						return reject("Bad response from server");
					}
					return response.text();
				})
				.then(function(status) {
					console.log(status);
					return resolve(status);
				});
		})
	}

	async status() {
		let url = `${baseUrl}/${version}/status`
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(function(response) {
					if (response.status >= 400) {
						throw new Error("Bad response from server");
						return reject("Bad response from server");
					}
					return response.text();
				})
				.then(function(status) {
					console.log(status);
					return resolve(status);
				});
		})
	}

	async logout(userip) {
		let url = `${baseUrl}/${version}/logout`;
		return new Promise((resolve, reject) => {
			fetch(url, {
					method: "POST",
					headers: {
					  "Content-Type": "application/x-www-form-urlencoded"
					},
					body: `userip=${userip}`
				})
				.then(function(response) {
					if (response.status >= 400) {
						throw new Error("Bad response from server");
						return reject("Bad response from server");
					}
					return response.text();
				})
				.then(function(status) {
					console.log(status);
					return resolve(status);
				});
		})
	}

	async ip() {
		let url = `${baseUrl}/${version}/ip`;
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(function(response) {
					if (response.status >= 400) {
						throw new Error("Bad response from server");
						return reject("Bad response from server");
					}
					return response.text();
				})
				.then(function(ip) {
					console.log(ip);
					return resolve(ip);
				});
		});
	}
}