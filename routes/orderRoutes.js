const router = require("express").Router();
const {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
} = require("../controllers/orderController");

router.post("/add-order", addOrder);
router.get("/get-order/:id", getOrder);
router.get("/get-orders/", getOrders);
router.patch("/update-order/:id", updateOrder);
module.exports = router;
