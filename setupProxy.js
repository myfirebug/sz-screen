//引入插件
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/amap",
    createProxyMiddleware({
      target: "https://restapi.amap.com",
      changeOrigin: true,
      pathRewrite: {
        "^/amap": "",
      },
    })
  );
};
