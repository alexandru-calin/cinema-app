const express = require("express");
const connectToDB = require("./utils/database");
const moviesRouter = require("./controllers/movies");

connectToDB();

const app = express();

app.use(express.json());

app.use("/api/movies", moviesRouter);

module.exports = app;