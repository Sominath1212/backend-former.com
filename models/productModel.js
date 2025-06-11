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
  image: {
    type: String,
    require: false,
    default: null,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  stock: Number,
  description: String,
  weight: String,
},{
  timestamps: true, // <-- Add this line!
});

module.exports = mongoose.model("Product", ProductSchema);






