'use strict';
import fs from 'fs';
let port;
let portFile = think.ROOT_PATH + think.sep + 'port';
if (think.isFile(portFile)) {
	port = fs.readFileSync(portFile, 'utf8');
}

export default {
	port: port || 8360,
	resource_reg: /^(static\/|theme\/|[^\/]+\.(?!js|html|xml)\w+$)/,
	resource_on: true, //是否开启静态资源解析功能
	resource_reg: /^(static\/|[^\/]+\.(?!js|html)\w+$)/, //判断为静态资源请求的正则
};