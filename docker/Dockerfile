FROM daocloud.io/library/node:6.2.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
COPY package.json /usr/src/app/
#安装最新版本pm2模块
RUN cnpm install pm2@latest -g
#安装依赖
RUN cnpm install
COPY . /usr/src/app
ENV PORT 8360
EXPOSE 8360
# 线上环境
RUN npm run compile
ENTRYPOINT pm2 start www/production.js --no-daemon