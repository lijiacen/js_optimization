const Koa = require("koa");
const app = new Koa();
const compress = require("koa-compress"); //koa-compress中间件对文件压缩
const static = require("koa-static"); //静态资源服务插件

app.use(compress({}));
app.use(
  static(__dirname + "/build/", {
    extensions: ["html"]
  })
);

app.listen(3000); //服务启动端口
