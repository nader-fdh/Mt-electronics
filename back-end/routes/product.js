const express = require("express");
const Product = require("../models/Product");
const authmiddleware = require("../helpers/authMiddleware");
const isAdmin = require("../helpers/isAdmin");
require("dotenv").config({ path: "./.env" });
const { authJwt } = require("../middlewares");
// setting ...
const router = express.Router();

// post a new product router (admin)
router.post("/", (req, res) => {
  let newProduct = new Product({ ...req.body, owner: req.userId });
  newProduct
    .save()
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "server error" });
    });
});
// get all pruduct
router.get("/", (req, res) => {
  Product.find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ msg: "server error" });
    });
});
// update product router (admin)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndUpdate(id, { ...req.body })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ msg: "server error" });
    });
});

// Delete product
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then((data) => res.json({ msg: "Product deleted" }))
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
