const express = require("express");

const productsRoute = require("./routes/products");
const total = require("./routes/total");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use("/", productsRoute);
app.use("/", total);

module.exports = app;
