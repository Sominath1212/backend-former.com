const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    image: { type: String, require: false, default: null },
  },
  {
    timestamps: true, // <-- Add this line!
  }
);

module.exports = mongoose.model("Category", CategorySchema);
