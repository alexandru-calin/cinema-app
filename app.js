const express = require("express");
const connectToDB = require("./utils/database");
const middleware = require("./utils/middleware")
const moviesRouter = require("./controllers/movies");

connectToDB();

const app = express();

app.use(express.json());

app.use("/api/movies", moviesRouter);

app.use(middleware.errorHandler);

module.exports = app;