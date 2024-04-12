const express = require("express");
const router = express.Router();

const CoursesController = require("../app/Controller/CoursesController");
router.get("/create", CoursesController.create);
router.post("/store", CoursesController.store);
router.get("/:slug", CoursesController.show);
router.get("/", CoursesController.index);

module.exports = router;
