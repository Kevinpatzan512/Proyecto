import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";


function PredicPremier({ guardarPredicciones }) {
  const [resultados, setResultados] = useState({});
  const [error, setError] = useState("");
  const [predicciones, setPredicciones] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [seleccionActual, setSeleccionActual] = useState({});
  const formRef = useRef();

  const partidos = [
    {
      id: "match1",
      local: "Liverpool",
      visitante: "Everton",
      imgsrcl: "/img/premierleague/liverpool.png",
      imgsrcv: "/img/premierleague/everton.png",
    },
    {
      id: "match2",
      local: "Brentford",
      visitante: "Burnley",
      imgsrcl: "/img/premierleague/brentford.png",
      imgsrcv: "/img/premierleague/burnley.png",
    },
    {
      id: "match3",
      local: "Bournemouth",
      visitante: "Wolves",
      imgsrcl: "/img/premierleague/bournemouth.png",
      imgsrcv: "/img/premierleague/wolves.png",
    },
    {
      id: "match4",
      local: "Manchester City",
      visitante: "Brighton & Hove",
      imgsrcl: "/img/premierleague/manchestercity.png",
      imgsrcv: "/img/premierleague/brighton.png",
    },
    {
      id: "match5",
      local: "Nottingham Forest",
      visitante: "Luton Town",
      imgsrcl: "/img/premierleague/nottingham_forest.png",
      imgsrcv: "/img/premierleague/luton_town.png",
    },
    {
      id: "match6",
      local: "Newcastle United",
      visitante: "Crystal Palace",
      imgsrcl: "/img/premierleague/newcastle.png",
      imgsrcv: "/img/premierleague/crystalpalace.png",
    },
    {
      id: "match7",
      local: "Chelsea",
      visitante: "Arsenal",
      imgsrcl: "/img/premierleague/chelsea.png",
      imgsrcv: "/img/premierleague/arsenal.png",
    },
    {
      id: "match8",
      local: "Sheffiled United",
      visitante: "Manchester United",
      imgsrcl: "/img/premierleague/sheffield.png",
      imgsrcv: "/img/premierleague/manchesterunited.png",
    },
    {
      id: "match9",
      local: "Aston Villa",
      visitante: "West Ham",
      imgsrcl: "/img/premierleague/astonvilla.png",
      imgsrcv: "/img/premierleague/westham.png",
    },
    {
      id: "match10",
      local: "Tottenham",
      visitante: "Fulham",
      imgsrcl: "/img/premierleague/tottenham.png",
      imgsrcv: "/img/premierleague/fulham.png",
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

export default PredicPremier;
