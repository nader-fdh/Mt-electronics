const express = require("express");
const authmiddleware = require("../helpers/authMiddleware");
const Dashboard = require("../models/dashboard");
require("dotenv").config({ path: "./.env" });
// setting ...
const router = express.Router();

// post a new product router (admin)
router.post("/", (req, res) => {
  let newDashboard = new Dashboard({ ...req.body });
  newDashboard
    .save()
    .then((dashboard) => {
      res.status(200).send(dashboard);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "server error" });
    });
});

// get all pruduct
router.get("/", (req, res) => {
  Dashboard.find()
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({ msg: "server error" });
    });
});

// update product router (admin)
router.put("/:id", (req, res) => {
  const id = req.params.id;
  Dashboard.findByIdAndUpdate(id, { ...req.body })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ msg: "server error" });
    });
});

module.exports = router;
