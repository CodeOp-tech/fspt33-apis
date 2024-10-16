const express = require("express");

const app = express();

const PORT = 4000;

// register route
app.get("/movies", (req, res) => {
  res.send("GET movies");
});

app.get("/movies/:id", (req, res) => {
  res.send("GET movie");
});

app.post("/movies", (req, res) => {
  res.send("POST movie");
});

app.put("/movies/:id", (req, res) => {
  res.send("PUT movie");
});

app.delete("/movies/:id", (req, res) => {
  res.send("DELETE movie");
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
