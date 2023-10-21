import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function PredicSeriea() {
  const [resultados, setResultados] = useState({});
  const [error, setError] = useState("");
  const [predicciones, setPredicciones] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [seleccionActual, setSeleccionActual] = useState({});
  const formRef = useRef();

  const partidos = [
    {
      id: "match1",
      local: "Hellas Verona",
      visitante: "Napoli",
      imgsrcl: "/img/seriea/hellasverona.png",
      imgsrcv: "/img/seriea/napoli.png",
    },
    {
      id: "match2",
      local: "Torino",
      visitante: "Inter",
      imgsrcl: "/img/seriea/torino.png",
      imgsrcv: "/img/seriea/inter.png",
    },
    {
      id: "match3",
      local: "Sassuolo",
      visitante: "Lazio",
      imgsrcl: "/img/seriea/sassuolo.png",
      imgsrcv: "/img/seriea/lazio.png",
    },
    {
      id: "match4",
      local: "Roma",
      visitante: "Monza",
      imgsrcl: "/img/seriea/roma.png",
      imgsrcv: "/img/seriea/monza.png",
    },
    {
      id: "match5",
      local: "Salernitana",
      visitante: "Cagliari",
      imgsrcl: "/img/seriea/salernitana.png",
      imgsrcv: "/img/seriea/cagliari.png",
    },
    {
      id: "match6",
      local: "Bolonia",
      visitante: "Frosinone",
      imgsrcl: "/img/seriea/bologna.png",
      imgsrcv: "/img/seriea/frosinone.png",
    },
    {
      id: "match7",
      local: "Atalanta",
      visitante: "Genoa",
      imgsrcl: "/img/seriea/atalanta.png",
      imgsrcv: "/img/seriea/genoa.png",
    },
    {
      id: "match8",
      local: "Milan",
      visitante: "Juventus",
      imgsrcl: "/img/seriea/milan.png",
      imgsrcv: "/img/seriea/juventus.png",
    },
    {
      id: "match9",
      local: "Udinese",
      visitante: "Lecce",
      imgsrcl: "/img/seriea/udinese.png",
      imgsrcv: "/img/seriea/lecce.png",
    },
    {
      id: "match10",
      local: "Fiorentina",
      visitante: "Empoli",
      imgsrcl: "/img/seriea/fiorentina.png",
      imgsrcv: "/img/seriea/empoli.png",
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

export default PredicSeriea;