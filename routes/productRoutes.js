const {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");
const router = require("express").Router();
// get all products
router.get("/get-all-products", getProducts);
// get product with id
router.get("/get-product/:id", getProduct);
// add product
router.post("/add-product", addProduct);
//delete product
router.delete("/delete-product/:id", deleteProduct);
// update product
router.patch("/update-product/:id", updateProduct);

module.exports = router;
