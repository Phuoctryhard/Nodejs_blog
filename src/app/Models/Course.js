const mongoose = require("mongoose");

var slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String, maxLength: 200, required: true },
  description: String,
  image: String,
  video: String,
  level: String,
  slug: { type: String, slug: "name" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
// từ Course => dạng số nhiều
// model này chọc vào database

module.exports = mongoose.model("Course", Course);
