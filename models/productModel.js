const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    default: null,
  },
  price: {
    type: Number,
    require: true,
    default: 0,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  stock: Number,
  description: String,
  weight: String,
});

module.exports = mongoose.model("Product", ProductSchema);
