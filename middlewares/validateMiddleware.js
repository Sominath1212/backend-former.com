const Joi = require("joi");

const registerValidation = (req, res, next) => {
  const userValidationSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),

    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(30).required(),
    role: Joi.valid("CLIENT", "ADMIN", null).optional(),

  });

  const { error } = userValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(32).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "bad request", error });
  }
  next();
};

module.exports = {
  registerValidation,
  loginValidation,
};
