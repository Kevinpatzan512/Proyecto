import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

const PaginaApuesta = () => {
  const [predicciones, setPredicciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/predicciones")
      .then((response) => {
        if (response.status === 200) {
          setPredicciones(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener las predicciones:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-center">
      <h1 className="pageSubtitle">Predicciones Guardadas</h1>
      {loading ? (
        <p>Cargando predicciones...</p>
      ) : (
        <div>
          {predicciones.length > 0 ? (
            <ul>
              {predicciones.map((prediccion, index) => (
                <div key={index} className="predicBox">
                  <h3>Predicción {index + 1}</h3>
                  {prediccion.map((resultado, rIndex) => (
                    <div key={rIndex}>
                      <p>
                        {resultado.equipoLocal} vs {resultado.equipoVisitante}
                      </p>
                      <p className="resultSelect">
                        Resultado: {resultado.resultado}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </ul>
          ) : (
            <p>No hay predicciones disponibles.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PaginaApuesta;
