const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    await userModel.findOne({ email: email }).then((user) => {
      if (user) {
        /// login user

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            const options = {
              expiresIn: "1h", // Token expires in 1 hour (e.g., '15m', '7d', '24h')
            };
            const payload = {
              userid: user._id,
              username: user.username,
              useremail: user.email,
              userrole: user.role,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, options);
            // console.log(token);
            res.status(200).json({
              message: "logined-in successfully",
              token: token,
              role: user.role,
            });
          } else {
          
            res.status(401).json({ message: "Invalid Creaditials" });
          }
        });
      } else {
        res.status(404).json({ message: "user not found" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
  // res.status(200).json({ user: { email, password } });
};
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // console.log(req.body);
  try {
    await userModel.findOne({ email: email }).then((user) => {
      if (user) {
        res.status(208).json({ message: "user is already present" });
      } else {
        // hashing password

        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            console.error("Error hashing password:", err);
          } else {
            userModel
              .insertOne({
                username: name,
                email: email,
                password: hashedPassword,
              })
              .then((user) => {
                if (user) {
                  res
                    .status(200)
                    .json({ message: "user register successfully" });
                }
              });
          }
        });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  login,
  register,
};
