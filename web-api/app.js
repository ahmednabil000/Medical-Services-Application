require("dotenv").config();
const express = require("express");

const app = express();
app.use((req, res, next) => {
  res.send("<h1>HELLO STAT NOW</h1>");
});
app.listen(process.env.PORT);
