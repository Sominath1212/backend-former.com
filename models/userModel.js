const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default: null,
      required: true,
    },
    email: {
      type: String,
      default: null,
      required: true,
    },
    password: {
      type: String,
      default: null,
      required: true,
    },
    role: {
      type: String,
      default: "CLIENT",
    },
  },
  {
    timestamps: true, // <-- Add this line!
  }
);

module.exports = mongoose.model("User", userSchema);
