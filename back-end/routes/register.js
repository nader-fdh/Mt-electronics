const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Admin.js");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/",
  [
    // [
    //   body("fname", "first name must conatin only alphabitic").isAlpha(),
    //   body("lname", "last name must conatin only alphabitic").isAlpha(),
    //   body("email", "Please enter a valid email").isEmail(),
    //   body("password", "Minimum length allowed is 5 characters").isLength({
    //     min: 5,
    //   }),
    // ],
    upload.single("avatar"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    let myBody = JSON.parse(req.body.info);

    User.find({ email: myBody.email }).then((users) => {
      if (users.length) {
        return res
          .status(400)
          .send({ errors: [{ msg: "User already exists" }] });
      }
      let path = `${req.protocol}://${req.hostname}:5000/uploads/${req.file.filename}`;
      let newUser = new User({ ...myBody, avatar: path });
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err;
        }
        bcrypt.hash(myBody.password, salt, (err, hashedPwd) => {
          if (err) {
            throw err;
          }
          newUser.password = hashedPwd;
          newUser.save();
          let payload = {
            userId: newUser._id,
          };
          jwt.sign(payload, process.env.SECRET_KEY, (err, token) => {
            if (err) {
              throw err;
            }
            res.send({ token });
          });
        });
      });
    });
  }
);

module.exports = router;
