const { Router } = require("express");
const { login, register } = require("../controllers/authController");
const {
  loginValidation,
  registerValidation,
} = require("../middlewares/validateMiddleware");

const router = Router();

router.post("/login", loginValidation, login);
router.post("/register", registerValidation, register);

module.exports = router;
