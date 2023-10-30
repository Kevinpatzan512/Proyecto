import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

function PredicLaliga() {
  const [resultados, setResultados] = useState({});
  const [error, setError] = useState("");
  const [predicciones, setPredicciones] = useState([]);
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [seleccionActual, setSeleccionActual] = useState({});
  const formRef = useRef();

  const partidos = [
    {
      id: "match1",
      local: "Osasuna",
      visitante: "Granada",
      imgsrcl: "/img/laliga/osasuna.png",
      imgsrcv: "/img/laliga/granada.png",
    },
    {
      id: "match2",
      local: "Real Sociedad",
      visitante: "Mallorca",
      imgsrcl: "/img/laliga/realsociedad.png",
      imgsrcv: "/img/laliga/mallorca.png",
    },
    {
      id: "match3",
      local: "Getafe",
      visitante: "Betis",
      imgsrcl: "/img/laliga/getafe.png",
      imgsrcv: "/img/laliga/betis.png",
    },
    {
      id: "match4",
      local: "Sevilla",
      visitante: "Real Madrid",
      imgsrcl: "/img/laliga/sevilla.png",
      imgsrcv: "/img/laliga/realmadrid.png",
    },
    {
      id: "match5",
      local: "Celta de Vigo",
      visitante: "Atletico de Madrid",
      imgsrcl: "/img/laliga/celta.png",
      imgsrcv: "/img/laliga/atlmadrid.png",
    },
    {
      id: "match6",
      local: "Las Palmas",
      visitante: "Rayo Vallecano",
      imgsrcl: "/img/laliga/udlaspalmas.png",
      imgsrcv: "/img/laliga/rayovallecano.png",
    },
    {
      id: "match7",
      local: "Girona",
      visitante: "Almeria",
      imgsrcl: "/img/laliga/girona.png",
      imgsrcv: "/img/laliga/almeria.png",
    },
    {
      id: "match8",
      local: "Villarreal",
      visitante: "Alavés",
      imgsrcl: "/img/laliga/villarreal.png",
      imgsrcv: "/img/laliga/alaves.png",
    },
    {
      id: "match9",
      local: "Athletic Club",
      visitante: "Barcelona",
      imgsrcl: "/img/laliga/athletic.png",
      imgsrcv: "/img/laliga/barcelona.png",
    },
    {
      id: "match10",
      local: "Valencia",
      visitante: "Cadiz",
      imgsrcl: "/img/laliga/valencia.png",
      imgsrcv: "/img/laliga/cadiz.png",
    },
  ];

  const handleSeleccion = (partidoId, resultado) => {
    setResultados({
      ...resultados,
      [partidoId]: resultado,
    });
    setSeleccionActual({ ...seleccionActual, [partidoId]: resultado });
  };

  const guardarPrediccionEnAPI = () => {
    const prediccionesParaEnviar = partidos.map((partido) => {
      return {
        torneo: "Premier League",
        equipoLocal: partido.local,
        equipoVisitante: partido.visitante,
        resultado: resultados[partido.id] || "Sin selección",
      };
    });
  
    axios
      .post(
        "http://localhost:5000/api/registrar-prediccion",
        prediccionesParaEnviar
      )
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
                guardarPrediccionEnAPI();
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

export default PredicLaliga;