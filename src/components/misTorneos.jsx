import React from "react";

const MisTorneos = ({ partidos }) => {
  return (
    <div>
      <h1>Resultados de los partidos</h1>
      <ul>
        {partidos.map((partido) => (
          <li key={partido.id}>
            Local: {partido.local}, Visitante: {partido.visitante}, Torneo: {partido.torneo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MisTorneos;