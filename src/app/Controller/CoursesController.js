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
    // them thuoc tính
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

  // edit
  edit(req, res, next) {
    // đổ qua trang edit
    console.log(req.params._id);
    Course.findById(req.params._id).then((data) => {
      console.log(data);

      res.render("courses/edit", {
        course: mongooseToObject(data),
      });
    });
  }
  // [PUT] courses/:id
  update(req, res, next) {
    // tham số 1 : condition , ts2 : update
    Course.updateOne({ _id: req.params._id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  // res.json(req.body)
}

module.exports = new CoursesController();
