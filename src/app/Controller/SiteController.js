// Chú ý phải viết hoa
const { mutipleMogooseToObject } = require("../../until/mongoose");
const Courses = require("../Models/Course");
class SiteController {
  // [Get]/
  async index(req, res, next) {
    //   try {
    //     const courses = await Courses.find({});
    //     res.json(courses); // Assuming you want to send the found courses as JSON
    //   } catch (error) {
    //     console.error("Error fetching courses:", error);
    //     res.status(500).send("Internal Server Error");
    //   }
    // }

    // promise
    Courses.find({})
      .then((data) => {
        // res.json(data);
        //render ra home
        // xử lí phiên bản handlebars
        // data = data.map(element=>element.toObject())
        return res.render("home", {
          data: mutipleMogooseToObject(data),
        });
      })
      .catch((error) => {
        next(error);
      });
  }

  // [Get]/ :slug
  show(req, res) {
    res.send("Search");
  }
}
module.exports = new SiteController();
