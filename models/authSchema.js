const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "worker", "delivery", "admin"],
    },
    flag: {
      type: String,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    join: {
      type: String,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("auth", authSchema);
