const { Router } = require("express");
const {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");

const router = Router();

router.get("/get-categories", getCategories);
router.post("/add-category", addCategory);
router.delete("/delete-category/:id", deleteCategory);
router.patch("/update-category/:id", updateCategory);

module.exports = router;
