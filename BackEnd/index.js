const express = require('express');
const app = express();
const port = 3000;

const connectDB = require("./firestore");

let db;

connectDB().then(database => {
  db = database;
});

app.get('./id', (req, res) => {
  const id = req.params;
  db.collection("tablets").findOne({ _id: id }).then(resultado => {
    res.json(resultado);
  })
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

