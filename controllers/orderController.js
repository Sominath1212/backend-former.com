const orderModel = require("../models/orderModel");

const addOrder = (req, res) => {
  // const order = req.body;
  // console.log(req.body);

  const {
    userId,
    items,
    totalAmount,
    paymentMethod,
    paymentStatus,
    orderStatus,
    shippingAddress,
    deliveryDate,
    notes,
  } = req.body;

  try {
    orderModel
      .insertOne({
        userId,
        items,
        totalAmount,
        paymentMethod,
        paymentStatus,
        orderStatus,
        shippingAddress,
        deliveryDate,
        notes,
      })
      .then((inserted) => {
        console.log(inserted);
        res.status(200).json({ inserted, message: "order placed..." });
      });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateOrder = (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    orderModel.find({ _id: id }).then((order) => {
      if (order.length !== 0) {
        orderModel
          .updateOne({ _id: id }, { $set: updateData })
          .then((updatedOrder) => {
            if (updateOrder) {
              res.status(200).json({ message: "order updted successfully" });
            } else {
              res.status(208).json({ message: "unable to update" });
            }
          });
      } else {
        //update order

        res.status(404).json({ success: true, message: "Order not found" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getOrder = (req, res) => {
  const { id } = req.params;
  try {
    orderModel.find({ _id: id }).then((order) => {
      if (order) {
        res.status(200).json({ order });
      } else {
        res.status(404).json({ message: "order not found" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const getOrders = (req, res) => {
  try {
    orderModel.find({}).then((orders) => {
      if (orders) {
        res.status(200).json({ orders });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  addOrder,
  updateOrder,
  getOrder,
  getOrders,
};
