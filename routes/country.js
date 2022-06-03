const express = require("express");
const Route = express.Router();
const countrySchema = require("../models/countrySchema");

Route.post("/addcountry", async (req, res) => {
  try {
    var CountryName = await countrySchema.findOne({
      countryName: req.body.countryName,
    });
    if (CountryName) {
      return res.status(400).json("countryName already exists");
    }

    var countryData = await new countrySchema({
      countryName: req.body.countryName,
      countryCode: req.body.countryCode,
      flag: req.body.flag,
      join: new Date(),
    });

    var data = await countryData.save();
    res.json(data);
  } catch (err) {
    res.status(400).json(err);
  }
  res.json(countryData);
});

Route.get("/allcountries", async (req, res) => {
  const getCountry = await countrySchema.find({});
  res.json(getCountry);
});

Route.get("/country/:id", async (req, res) => {
  const getCountryId = await countrySchema.findById(req.params.id);
  res.json(getCountryId);
});

Route.delete("/countrydel/:id", async (req, res) => {
  const delCountry = await countrySchema.findByIdAndDelete(req.params.id);
  res.json(delCountry);
});

module.exports = Route;
