const router = require("express").Router();
const {
  addOrder,
  getOrders,
  getOrder,
  updateOrder,
} = require("../controllers/orderController");
const { isValidUser, isAdmin } = require("../middlewares/validatedMiddleware");

router.post("/add-order", isValidUser, addOrder);
router.get("/get-order/:id", isValidUser, getOrder);
router.get("/get-orders/", isValidUser, getOrders);
router.patch("/update-order/:id", isAdmin, updateOrder);
module.exports = router;
