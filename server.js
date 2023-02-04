const express = require("express");
const app = express();

const PORT = process.env.PORT || 3333; //se n tiver porta ele hospeda no 3333

app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

// se tu chegou aqui realmente se interessou pelo código rs

app.listen(PORT, (err) => {
  if (err) return console.log("Erro: " + err);
  console.log("Servidor iniciado na porta " + PORT);
});