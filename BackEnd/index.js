const express = require('express');
const app = express();
const port = 3000;

const connectDB = require("./firestore");

let db;

connectDB().then(database => {
  db = database;
});

app.get('/id', (req, res) => {
  const id = req.params;
  db.collection("tablets").findOne({ _id: id }).then(resultado => {
    res.json(resultado);
  })
});


app.post('/', (req, res) => {
  const { nome, disponivel } = req.body;
  db.collection("tablets").insertOne({ nome, disponivel })
  res.send("Tablet Cadastrado");
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

