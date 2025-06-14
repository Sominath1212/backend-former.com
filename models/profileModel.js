const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema(
  {
    street: { type: String, required: false, default: null },
    city: { type: String, required: false, default: null },
    state: { type: String, required: false, default: null },
    postalCode: { type: String, required: false, default: null },
    country: { type: String, required: false, default: null },
  },
  { _id: false }
);

const ProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // reference to User model
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  profileImage: {
    type: String, // URL or base64 string
    default: null,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: false,
    default: null,
  },
  dateOfBirth: {
    type: Date,
    default: null,
  },
  shippingAddress: {
    type: AddressSchema,
    default: null,
    required: false,
  },
  billingAddress: {
    type: AddressSchema,
    required: false,
    default: null, // Optional if same as shipping
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Profile", ProfileSchema);
