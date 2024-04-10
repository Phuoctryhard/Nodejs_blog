const newsRouter = require("./news");
const siteRouter = require("./site");
function route(app) {
  // định nghĩa tuyến đường cho news
  app.use("/news", newsRouter);
  // trang chủ
  app.use("/", siteRouter);
}

module.exports = route;
