const express = require("express");
const router = express.Router();

const CoursesController = require("../app/Controller/CoursesController");
router.delete("/:_id", CoursesController.destroy);
router.put("/:_id", CoursesController.update);
router.get("/:_id/edit", CoursesController.edit);
router.get("/create", CoursesController.create);
router.post("/store", CoursesController.store);
router.get("/:slug", CoursesController.show);
router.get("/", CoursesController.index);

module.exports = router;
