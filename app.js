const express = require("express");
const connectToDB = require("./utils/database");

connectToDB();

const app = express();

app.use(express.json());

module.exports = app;