const Koa = require("koa");
const app = new Koa();

const static = require("koa-static"); //静态资源服务插件
app.use(static(__dirname + "/build/", {
  extensions: ['html']
}));



app.listen(3000); //服务启动端口