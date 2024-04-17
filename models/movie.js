const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  director: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;