import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";

const PageMisTorneos = () => {
  const [torneos, setTorneos] = useState([]);
  const [predicciones, setPredicciones] = useState([]);
  const [prediccionActual, setPrediccionActual] = useState({});
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [advertencia, setAdvertencia] = useState("");
  const [guardarDisabled, setGuardarDisabled] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/torneos")
      .then((response) => response.json())
      .then((data) => setTorneos(data))
      .catch((error) => console.error("Error al obtener torneos", error));
  }, []);

  const handlePrediccionChange = (partidoId, resultado, torneoId) => {
    setPrediccionActual({
      ...prediccionActual,
      [torneoId]: {
        ...prediccionActual[torneoId],
        [partidoId]: resultado,
      },
    });
  };

  useEffect(() => {
    const todasLasSeleccionesCompletas = torneos.every((torneo) =>
      torneo.partidos.every(
        (partido) =>
          prediccionActual[torneo.id] && prediccionActual[torneo.id][partido.id]
      )
    );

    setGuardarDisabled(!todasLasSeleccionesCompletas);
  }, [torneos, prediccionActual]);

  const guardarPrediccion = () => {
    const torneoIds = torneos.map((torneo) => torneo.id);
    const prediccionesParaEnviar = [];

    if (
      torneoIds.some((id) => {
        const partidos = torneos.find((torneo) => torneo.id === id).partidos;
        const partidoIds = partidos.map((partido) => partido.id);
        return partidoIds.some((partidoId) => !prediccionActual[id][partidoId]);
      })
    ) {
      setAdvertencia(
        "Debes seleccionar un resultado para cada partido en cada torneo."
      );
      return;
    }

    torneos.forEach((torneo) => {
      const torneoId = torneo.id;
      torneo.partidos.forEach((partido) => {
        const partidoId = partido.id;
        const equipoLocal = partido.local;
        const equipoVisitante = partido.visitante;
        const resultado = prediccionActual[torneoId][partidoId] || "Sin predicción";
        prediccionesParaEnviar.push({
          torneo: torneo.nombre,
          equipoLocal,
          equipoVisitante,
          resultado,
        });
      });
    });

    axios
      .post("http://localhost:5000/api/registrar-prediccion", prediccionesParaEnviar)
      .then((response) => {
        if (response.status === 201) {
          console.log("Predicciones guardadas correctamente en la API");
        } else {
          console.error("Error al guardar las predicciones en la API");
        }
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud POST:", error);
      });

    setPredicciones([...predicciones, prediccionActual]);
    setPrediccionActual({});
    setAdvertencia("");
    setMostrarResultados(false);
  };

  const mostrarResultadosGuardados = () => {
    if (predicciones.length === 0) {
      setAdvertencia("No hay predicciones guardadas para mostrar.");
    } else {
      setAdvertencia("");
      setMostrarResultados(true);
    }
  };

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6} className="text-center">
          <h1 className="pageSubtitle">Mis Torneos</h1>
          {torneos.length > 0 ? (
            <div>
              {torneos.map((torneo) => (
                <div key={torneo.id}>
                  <h3>Torneo: {torneo.nombre}</h3>
                  <h4>Partidos:</h4>
                  {torneo.partidos.map((partido) => (
                    <form key={partido.id}>
                      <div className="matchBox">
                        <p>
                          {partido.local} vs {partido.visitante}
                        </p>
                        <div>
                          <label>
                            <input
                              type="radio"
                              name={`resultado_${torneo.id}_${partido.id}`}
                              value="1"
                              onChange={() =>
                                handlePrediccionChange(
                                  partido.id,
                                  "Victoria Local",
                                  torneo.id
                                )
                              }
                            />{" "}
                            1 (Victoria Local)
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="radio"
                              name={`resultado_${torneo.id}_${partido.id}`}
                              value="X"
                              onChange={() =>
                                handlePrediccionChange(
                                  partido.id,
                                  "Empate",
                                  torneo.id
                                )
                              }
                            />{" "}
                            X (Empate)
                          </label>
                        </div>
                        <div>
                          <label>
                            <input
                              type="radio"
                              name={`resultado_${torneo.id}_${partido.id}`}
                              value="2"
                              onChange={() =>
                                handlePrediccionChange(
                                  partido.id,
                                  "Victoria Visitante",
                                  torneo.id
                                )
                              }
                            />{" "}
                            2 (Victoria Visitante)
                          </label>
                        </div>
                        {prediccionActual[torneo.id] &&
                          prediccionActual[torneo.id][partido.id] && (
                            <p className="resultSelect">
                              Resultado elegido:{" "}
                              {prediccionActual[torneo.id][partido.id]}
                            </p>
                          )}
                      </div>
                    </form>
                  ))}
                </div>
              ))}
              {advertencia && <p className="error">{advertencia}</p>}
              <Button
                className="btnLogin"
                onClick={guardarPrediccion}
                disabled={guardarDisabled}
              >
                Guardar Predicción
              </Button>
              <Button className="btnLogin" onClick={mostrarResultadosGuardados}>
                Mostrar Resultados
              </Button>
              {mostrarResultados && (
                <div>
                  <h3>Predicciones Guardadas</h3>
                  {predicciones.map((prediccion, index) => (
                    <div key={index}>
                      <h5>Predicción {index + 1}</h5>
                      {torneos.map((torneo) => (
                        <div key={torneo.id} className="predicBox">
                          <h5>Torneo: {torneo.nombre}</h5>
                          {torneo.partidos.map((partido) => (
                            <div key={partido.id}>
                              <p>
                                {partido.local} vs {partido.visitante}:{" "}
                              </p>
                              <p className="resultSelect">
                                {prediccion[torneo.id][partido.id] ||
                                  "Sin predicción"}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p>No se han registrado torneos todavía.</p>
          )}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default PageMisTorneos;
