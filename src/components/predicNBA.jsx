import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function PredicNBA() {
  const [resultados, setResultados] = useState({});
  const [error, setError] = useState("");
  const [predicciones, setPredicciones] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [seleccionActual, setSeleccionActual] = useState({});
  const formRef = useRef();

  const partidos = [
    {
      id: "match1",
      local: "Miami Heat",
      visitante: "Brooklyn Nets",
      imgsrcl: "/img/NBA/heat.png",
      imgsrcv: "/img/NBA/nets.jpeg",
    },
    {
      id: "match2",
      local: "San Antonio Spurs",
      visitante: "Houston Rockets",
      imgsrcl: "/img/NBA/spurs.png",
      imgsrcv: "/img/NBA/rockets.png",
    },
    {
      id: "match3",
      local: "Golden State Warriors ",
      visitante: "Sacramento Kings",
      imgsrcl: "/img/NBA/warriors.png",
      imgsrcv: "/img/NBA/kings.png",
    },
    {
      id: "match4",
      local: "Charlotte Hornets",
      visitante: "Boston Celtics",
      imgsrcl: "/img/NBA/hornets.png",
      imgsrcv: "/img/NBA/celtics.png",
    },
    {
      id: "match5",
      local: "Chicago Bulls",
      visitante: "Minnesota Timberwolves",
      imgsrcl: "/img/NBA/bulls.png",
      imgsrcv: "/img/NBA/wolves.jpeg",
    },
    {
      id: "match6",
      local: "Oklahoma City Thunder",
      visitante: "Detroit Pistons",
      imgsrcl: "/img/NBA/thunder.png",
      imgsrcv: "/img/NBA/pistons.png",
    },
    {
      id: "match7",
      local: "Los Angeles Clippers",
      visitante: "Denver Nuggets",
      imgsrcl: "/img/NBA/clipers.png",
      imgsrcv: "/img/NBA/nugets.png",
    },
    {
      id: "match8",
      local: "Los Angeles Lakers",
      visitante: "Phoenix Suns",
      imgsrcl: "/img/NBA/lakers.png",
      imgsrcv: "/img/NBA/suns.png",
    },
    {
      id: "match9",
      local: "Philadelphia 76ers",
      visitante: "Atlanta Hawks",
      imgsrcl: "/img/NBA/76.png",
      imgsrcv: "/img/NBA/hawks.png",
    },
    {
      id: "match10",
      local: "Indiana Pacers",
      visitante: "Cleveland Cavaliers",
      imgsrcl: "/img/NBA/pacers.png",
      imgsrcv: "/img/NBA/clavaliers.png",
    },
  ];

  const handleSeleccion = (partidoId, resultado) => {
    setResultados({
      ...resultados,
      [partidoId]: resultado,
    });
    setSeleccionActual({ ...seleccionActual, [partidoId]: resultado });
  };

  const guardarResultados = () => {
    const partidoIds = partidos.map((partido) => partido.id);
    if (partidoIds.some((id) => !resultados[id])) {
      setError("Debes seleccionar un resultado para cada partido.");
    } else {
      setError("");
      const resultadosGuardados = partidos.map((partido) => ({
        imgsrcl: partido.imgsrcl,
        local: partido.local,
        imgsrcv: partido.imgsrcv,
        visitante: partido.visitante,
        resultado: resultados[partido.id],
      }));
      setPredicciones([...predicciones, resultadosGuardados]);
    }
  };

  const mostrarResultadosGuardados = () => {
    if (predicciones.length === 0) {
      setError("No hay resultados guardados para mostrar.");
    } else {
      setError("");
      setMostrarResultados(true);
    }
  };

  const nuevaPrediccion = () => {
    setMostrarResultados(false);
    setSeleccionActual({});
    formRef.current.reset();
    setResultados({});
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <h1 className="pageSubtitle">Jornada de Premier League</h1>
          <form ref={formRef}>
            {partidos.map((partido) => (
              <div key={partido.id} className="matchBox">
                <div className="escudos">
                  <img
                    src={partido.imgsrcl}
                    alt={partido.local}
                    className="escudosImg"
                  />
                  {partido.local}
                  <span> vs </span>
                  {partido.visitante}
                  <img
                    src={partido.imgsrcv}
                    alt={partido.visitante}
                    className="escudosImg"
                  />
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={partido.id}
                      value="1"
                      onChange={() =>
                        handleSeleccion(partido.id, "Victoria Local")
                      }
                    />{" "}
                    1 (Victoria Local)
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={partido.id}
                      value="X"
                      onChange={() => handleSeleccion(partido.id, "Empate")}
                    />{" "}
                    X (Empate)
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name={partido.id}
                      value="2"
                      onChange={() =>
                        handleSeleccion(partido.id, "Victoria Visitante")
                      }
                    />{" "}
                    2 (Victoria Visitante)
                  </label>
                </div>
                <div>
                  {resultados[partido.id] && (
                    <p className="resultSelect">
                      Resultado elegido: {resultados[partido.id]}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </form>
          {error && <p className="error">{error}</p>}
          <div>
            <Link
              onClick={() => {
                guardarResultados();
                nuevaPrediccion();
              }}
              className="btn btn-primary btnLogin"
            >
              Guardar Resultados
            </Link>
            <Link
              onClick={() => {
                mostrarResultadosGuardados();
              }}
              className="btn btn-primary btnLogin"
            >
              Mostrar Resultados
            </Link>
          </div>
        </div>
        {mostrarResultados && predicciones.length > 0 && (
          <div className="text-center">
            <h2>Predicciones Guardadas</h2>
            {predicciones.map((prediccion, index) => (
              <div key={index} className="predicBox">
                <h3>Predicción {index + 1}</h3>
                {prediccion.map((resultado, rIndex) => (
                  <div key={rIndex}>
                    <p>
                      <img src={resultado.imgsrcl} className="escudosImg" />{" "}
                      {resultado.local} vs {resultado.visitante}
                      <img
                        src={resultado.imgsrcv}
                        className="escudosImg"
                      />{" "}
                    </p>
                    <p className="resultSelect">
                      Resultado: {resultado.resultado}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default PredicNBA;