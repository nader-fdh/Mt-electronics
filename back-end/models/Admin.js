const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  fname: String,
  lname: String,
  role: {
    type: Number,
    default: 0,
  },
  email: String,
  avatar: String,
  password: String,
  message: String,
  timestamp: String,
  received: Boolean,
});

module.exports = mongoose.model("Admin", AdminSchema);
