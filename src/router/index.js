const newsRouter = require("./news");
const siteRouter = require("./site");
const couresRouter = require("./courses")
const meRouter = require("./me")
function route(app) {
  // định nghĩa tuyến đường cho news
  app.use("/me",meRouter)
  app.use("/courses",couresRouter)
  app.use("/news", newsRouter);
  // trang chủ
  app.use("/", siteRouter);
}

module.exports = route;
