const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db1 = {};

db1.mongoose = mongoose;

db1.user = require("./user.model");
db1.role = require("./role.model");

db1.ROLES = ["user", "admin", "moderator"];

module.exports = db1;
