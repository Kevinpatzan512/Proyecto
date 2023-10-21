import React from "react";

const PaginaApuesta = ({ predicciones }) => {
  if (!predicciones) {
    return <div>No hay predicciones guardadas.</div>;
  }
  return (
    <div>
      <h1>Predicciones Guardadas</h1>
      <ul>
        {predicciones.map((prediccion, index) => (
          <li key={index}>
            Predicción {index + 1}:
            <ul>
              {prediccion.map((resultado, rIndex) => (
                <li key={rIndex}>
                  {resultado.local} vs {resultado.visitante} - Resultado:{" "}
                  {resultado.resultado}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PaginaApuesta;
