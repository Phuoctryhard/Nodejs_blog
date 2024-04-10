const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Course = new Schema({
  name: { type: String, maxLength: 200 },
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
// từ Course => dạng số nhiều
// model này chọc vào database

module.exports = mongoose.model("Course", Course);
