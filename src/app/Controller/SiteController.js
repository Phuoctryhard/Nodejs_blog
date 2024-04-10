// Chú ý phải viết hoa

const Courses = require("../Models/Course");
class SiteController {
  // [Get]/
  async index(req, res) {
    try {
      const courses = await Courses.find({});
      res.json(courses); // Assuming you want to send the found courses as JSON
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).send("Internal Server Error");
    }
  }
  // [Get]/ :slug
  show(req, res) {
    res.send("Search");
  }
}
module.exports = new SiteController();
