const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  title: { type: String, require: true },
  image: { type: String, require: false, default: null },
});

module.exports = mongoose.model("Category", CategorySchema);
