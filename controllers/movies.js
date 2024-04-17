const moviesRouter = require("express").Router();
const Movie = require("../models/movie");

moviesRouter.get("/", async (req, res) => {
  const movies = await Movie.find({});
  res.json(movies);
});

moviesRouter.get("/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const movie = await Movie.findById(id);

    if (movie) {
      res.json(movie);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

moviesRouter.post("/", async (req, res, next) => {
  const { title, director, year, duration } = req.body;

  const movie = new Movie({
    title,
    director,
    year,
    duration
  });

  try {
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    next(error);
  }
});

module.exports = moviesRouter;