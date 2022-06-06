const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Auth = mongoose.model("auth");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  //authorization === Bearer ewefwegwrherhe
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    req.user = payload;
    next();
  });
};
