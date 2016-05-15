### 开发
下载安装nodejs开发环境后，克隆代码
```
git clone https://github.com/liiklin/T278.git
```

运行命令
```
npm install

npm start
```

### 部署

采用 docker 部署的方法
```
docker build -t t278_web -f docker/Dockerfile .
docker run --name t278_web -p 8360:8360 t278_web -d
```

按 docker-compose.yml 中的配置，可访问 http://localhost:8360
