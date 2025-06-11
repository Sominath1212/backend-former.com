const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["COD", "UPI", "Online", "Card"],
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },

    orderStatus: {
      type: String,
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Processing",
    },

    shippingAddress: {
      fullName: { type: String, required: true },
      mobile: { type: String, required: true },
      pincode: { type: String, required: true },
      address: { type: String, required: true },
      district: { type: String, required: true },
      state: { type: String, required: true },
    },

    orderDate: {
      type: Date,
      default: Date.now,
    },

    deliveryDate: {
      type: Date,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // <-- Add this line!
  }
);

module.exports = mongoose.model("Order", orderSchema);
