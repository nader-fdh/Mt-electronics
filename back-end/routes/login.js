const express = require("express");
const router = express.Router();
const authMiddleware = require("../helpers/authMiddleware");
const User = require("../models/Admin");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.get("/auth", authMiddleware, (req, res) => {
  res.json({ msg: "authorised" });
});

// load connected user
router.get("/", authMiddleware, (req, res) => {
  User.findById(req.userId)
    .select("-password -__v")
    .then((user) => {
      if (!user) {
        res.status(404).json({ msg: "user not found" });
      }
      res.status(200).json(user);
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send({ msg: "server error" });
    });
});

// login user
router.post(
  "/",
  [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "please enter your password").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res
          .status(404)
          .json({ errors: [{ msg: "please register before" }] });
      }
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) {
          throw err;
        } else if (!isMatch) {
          return res.status(400).json({ errors: [{ msg: "wrong password" }] });
        } else {
          let payload = {
            userId: user._id,
          };
          jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
            if (err) {
              throw err;
            }
            res.send({ token });
          });
        }
      });
    });
  }
);

module.exports = router;
