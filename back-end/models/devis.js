const mongoose = require("mongoose");
const DevisSchema = mongoose.Schema({
  company: String,
  userName: String,
  fname: String,
  lname: String,
  email: String,
  phone: Number,
  adress: String,
  city: String,
  postalCode: Number,
  description: String,
  file: Array,
});

module.exports = mongoose.model("devis", DevisSchema);
