require("dotenv").config();

module.exports = (req, res, next) => {
  let user = req.body;
  if (res.user.role === 0) {
    return res.status(403).json({ msg: "Admin resourse ! access denied" });
  }
  next();
};
