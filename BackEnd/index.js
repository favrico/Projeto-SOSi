const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const connectDB = require("./firestore");

let db;

connectDB().then(database => {
  db = database;
});

app.post('/agendamento/informatica', (req, res) => {
  console.log(req.body)
  const { data_e_hora, turma, quant_equip, materia } = req.body;
  db.collection("agendamentos")
  .insertOne({
    data_e_hora,
    turma,
    quant_equip,
    materia,
    tipo_equip: "notebook"
    })
  res.send("Agendamento Cadastrado! Ótima aula:)");
});

app.post('/agendamento/equipamento', (req, res) => {
  console.log(req.body)
  const { data_e_hora, turma, quant_equip, materia, tipo_equip } = req.body;
  db.collection("agendamentos")
  .insertOne({
    data_e_hora,
    turma,
    quant_equip,
    materia,
    tipo_equip
    })
  res.send("Agendamento Cadastrado! Ótima aula:)");
});

app.get('/agendamentos', (req, res) => {
  res.send("api esta legal")
})

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

