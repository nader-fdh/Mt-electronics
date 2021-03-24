const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
  },
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  image: String,
});

module.exports = mongoose.model("product", ProductSchema);
