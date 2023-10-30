const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const torneos = [];
const predicciones = []; // Nuevo arreglo para almacenar las predicciones

app.post("/api/registrar-torneo", (req, res) => {
  const torneo = req.body;

  if (torneo) {
    torneos.push(torneo);
    res.status(201).json({ message: "Torneo registrado correctamente" });
  } else {
    res.status(400).json({ error: "No se pudo registrar el torneo" });
  }
});

app.get("/api/torneos", (req, res) => {
  res.json(torneos);
});

app.post("/api/registrar-prediccion", (req, res) => {
  const prediccion = req.body;

  if (prediccion) {
    predicciones.push(prediccion);
    res.status(201).json({ message: "Predicción registrada correctamente" });
  } else {
    res.status(400).json({ error: "No se pudo registrar la predicción" });
  }
});

app.get("/api/predicciones", (req, res) => {
  res.json(predicciones);
});
  
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
