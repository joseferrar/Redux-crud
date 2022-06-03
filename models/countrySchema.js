const mongoose = require("mongoose");

const countrySchema = mongoose.Schema(
  {
    countryName: {
      type: String,
      required: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    flag: {
      type: String,
      required: true,
    },
    join: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("countries", countrySchema);
