const mongoose = require("mongoose");

const MessagesSchema = mongoose.Schema({
  name: String,
  message: String,
  timestamp: String,
  received: Boolean,
});

module.exports = mongoose.model("messages", MessagesSchema);
