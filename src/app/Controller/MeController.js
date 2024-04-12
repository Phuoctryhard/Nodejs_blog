
const Course = require("../Models/Course");

const {
  mutipleMogooseToObject,
  mongooseToObject,
} = require("../../until/mongoose");
class MeController {
  //[Get]/me/stored/Courses
  storedCourses(req, res) {
    // 
    Course.find({})
      .then(data=>{
        res.render("mee/stored-courses",{
          courses : mutipleMogooseToObject(data)
        })
      })
   
  }
  
}

module.exports = new MeController();
