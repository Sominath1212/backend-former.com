const express = require("express");

const {
  addProfile,
  updateProfile,
  getProfile,
  deleteProfile,
} = require("../controllers/profileController");
const router = express.Router();

router.post("/add-profile", addProfile);
router.patch("/update-profile/:id", updateProfile);
router.delete("/delete-profile/:id", deleteProfile);
router.get("/get-profile/:id", getProfile);
module.exports = router;
