const express = require("express");

const router = express.Router();
// đối tượng đc khởi tạo từ class

const siteController = require("../app/Controller/SiteController");

router.get("/:slug", siteController.show);
router.get("/", siteController.index);

module.exports = router;
