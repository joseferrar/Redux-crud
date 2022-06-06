const express = require("express");
const router = express.Router();
const authSchema = require("../models/authSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const protected = require("../middleware/protected");

router.get("/protected", protected, (req, res) => {
  res.send("hello user" + req.user.email);
});

router.post("/register", async (req, res) => {
  try {
    var emailExists = await authSchema.findOne({ email: req.body.email });
    if (emailExists) {
      return res.status(400).json("Email already exists");
    }
    var countryExists = await authSchema.findOne({ country: req.body.country });
    if (countryExists) {
      return res.status(400).json("Country already exists");
    }
    var hash = await bcrypt.hash(req.body.password, 10);

    const user = await new authSchema({
      country: req.body.country,
      email: req.body.email,
      role: req.body.role,
      flag: req.body.flag,
      password: hash,
      active: req.body.active,
      status: req.body.status,
    });

    const data = await user.save();
    res.send(data);
  } catch (err) {
    res.status(400).json(err);
  }
});

//login
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  authSchema.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: "Email not exists" });
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign(
            { _id: savedUser._id },
            process.env.JWT_SECRET
          );
          const { _id, country, email, role, flag, status, active } = savedUser;
          res.json({
            token,
            user: { _id, country, email, role, flag, status, active },
          });
        } else {
          return res.status(422).json({ error: "Password not exists" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
