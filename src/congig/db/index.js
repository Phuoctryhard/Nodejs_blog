// Using Node.js `require()`
const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose
      .connect("mongodb://127.0.0.1:27017/F8")
      .then(() => console.log("Connected!"));
  } catch (error) {
    console.log("Fail");
  }
}
// export ra 1 object
module.exports = { connect };
