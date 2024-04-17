const moviesRouter = require("express").Router();
const Movie = require("../models/movie");

moviesRouter.get("/", async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

moviesRouter.get("/:id", async (req, res) => {
  const id = req.params.id;

  const movie = await Movie.findById(id);
  res.json(movie);
});

moviesRouter.post("/", async (req, res) => {
  const { title, director, year, duration } = req.body;

  const movie = new Movie({
    title,
    director,
    year,
    duration
  });

  const savedMovie = await movie.save();
  res.status(201).json(savedMovie);
});

module.exports = moviesRouter;