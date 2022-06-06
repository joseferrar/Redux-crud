require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const countryRoute = require("./routes/country");
app.use("/api", countryRoute);

const authRoute = require("./routes/auth");
app.use("/api", authRoute);

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("DB connection successfully");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
