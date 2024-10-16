const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

let movies = require("./data/movies");

const app = express();

app.use(bodyParser.json());

const PORT = 4000;

app.get("/movies", (req, res) => {
  return res.json({
    data: movies,
  });
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;

  const movie = movies.find((movie) => {
    return movie.id === id;
  });

  if (!movie) {
    return res.status(404).json({
      error: "Movie not found",
    });
  }

  return res.json({
    data: movie,
  });
});

app.post("/movies", (req, res) => {
  const newMovie = req.body;

  newMovie.id = uuidv4();

  movies.push(newMovie);

  return res.json({
    data: newMovie,
  });
});

app.put("/movies/:id", (req, res) => {
  const payload = req.body;
  const id = req.params.id;

  movies = movies.map((movie) => {
    if (movie.id === id) {
      movie = {
        ...movie,
        ...payload,
      };

      return movie;
    } else {
      return movie;
    }
  });

  return res.json({
    data: "Movie updated",
  });
});

app.delete("/movies/:id", (req, res) => {
  const id = req.params.id;

  movies = movies.filter((movie) => {
    return movie.id !== id;
  });

  return res.json({
    data: "Movie deleted",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
