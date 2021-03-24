const Devis = require("../Models/devis");
const express = require("express");
const multer = require("multer");

// const authmiddleware = require("../helpers/authMiddleware");
require("dotenv").config({ path: "./.env" });
// setting ...
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./devis-file");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

// post a new devis router
router.post("/", upload.array("photos", 10), (req, res) => {
  // console.log(req.files);

  let filesList = req.files.map(
    (file) =>
      (path = `${req.protocol}://${req.hostname}:5000/devis-file/${file.filename}`)
  );
  console.log(filesList);
  let myBody = JSON.parse(req.body.input);
  let newDevis = new Devis({ ...myBody, file: filesList });
  newDevis
    .save()
    .then((devis) => {
      res.status(200).send(devis);
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).send({ msg: "server error" });
    });
});
// get all devis (admin)
router.get("/", (req, res) => {
  Devis.find()
    .then((devis) => res.send(devis))
    .catch((err) => {
      res.status(500).send({ msg: "server error" });
    });
});

module.exports = router;
