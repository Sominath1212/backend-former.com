const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const { isAdmin, isValidUser } = require("../middlewares/validatedMiddleware");

const router = require("express").Router();
// get all products
router.get("/get-all-products", isValidUser, getProducts);
// get product with id
router.get("/get-product/:id", isValidUser, getProduct);
// add product
router.post("/add-product", isAdmin, addProduct);
//delete product
router.delete("/delete-product/:id", isAdmin, deleteProduct);
// update product
router.patch("/update-product/:id", isAdmin, updateProduct);

module.exports = router;
