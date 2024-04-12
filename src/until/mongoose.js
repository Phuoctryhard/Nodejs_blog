module.exports = {
  // mảng document
  mutipleMogooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => {
      return mongoose.toObject();
    });
  },
  // 1 document return Object()
  mongooseToObject: function (mongoose) {
    return mongoose ?  mongoose.toObject() : mongoose;
  },
};
