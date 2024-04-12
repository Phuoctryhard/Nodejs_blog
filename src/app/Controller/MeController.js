
const Course = require("../Models/Course");

const {
  mutipleMogooseToObject,
  mongooseToObject,
} = require("../../until/mongoose");
class MeController {
  //[Get]/me/stored/Courses
  storedCourses(req, res) {
    res.render("mee/me");
  }
 
}

module.exports = new MeController();
