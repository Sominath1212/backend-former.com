const { Router } = require("express");
const {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const { isValidUser, isAdmin } = require("../middlewares/validatedMiddleware");

const router = Router();

router.get("/get-categories",isValidUser, getCategories);
router.post("/add-category", isAdmin,addCategory);
router.delete("/delete-category/:id", isAdmin, deleteCategory);
router.patch("/update-category/:id", isAdmin, updateCategory);
 
module.exports = router;
