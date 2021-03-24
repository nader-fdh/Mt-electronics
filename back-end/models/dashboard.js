const mongoose = require("mongoose");
const DashboardSchema = mongoose.Schema({
  employer: Number,
  revenue: String,
  client: Number,
  completedWork: Number,
});

module.exports = mongoose.model("dashboard", DashboardSchema);
