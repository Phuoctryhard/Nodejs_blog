const Course = require("../Models/Course");

const {
  mutipleMogooseToObject,
  mongooseToObject,
} = require("../../until/mongoose");
class CoursesController {
  //[Get]/courses/create
  create(req, res) {
    res.render("courses/create");
  }
  //[Post/courses/store]
  // xử lí lưu dữ liệu post ở đây
  store(req, res) {
    // them thuocj tính
    req.body.image;
    const formdata = req.body;
    formdata.image = `https://www.youtube.com/embed/${req.body.image}`;
    console.log(formdata);
    res.json(formdata);
    // lưu vào database
    const course = new Course(formdata);
    course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((error) => {});
  }

  // [Get]/
  index(req, res) {
    res.render("search");
  }
  // [Get]/ :slug
  show(req, res, next) {
    console.log(req.params);
    // promise
    Course.findOne({ slug: req.params.slug })
      .then((data) => {
        // res.json(data)
        res.render("courses/show", {
          course: mongooseToObject(data),
        });
      })
      .catch(next);
  }
}

module.exports = new CoursesController();
