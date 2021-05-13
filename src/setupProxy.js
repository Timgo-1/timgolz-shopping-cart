const proxy = require("http-proxy-middleware");

module.exports = app => {
  app.use(proxy("/api/*", { target: "https://timgolz-shopping-cart.herokuapp.com/" }));
};