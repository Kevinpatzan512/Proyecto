import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const BarraNav = () => {
  return (
    <nav className="navbar navbar-expand-lg barraNav">
      <div className="container-fluid letraNav">
        <Link className="navbar-brand" to="/pageInicio">
          <img src="/img/logotemp.png" width={40} height={40} className="imgNav" />
          Quinielas Deportivas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/pageTorneos">
                <img src="/img/torneo.png" width={30} height={30} className="imgNav"/>
              Torneos
            </Link>
            <Link className="nav-link" to="/pagePartidos">
            <img src="/img/partidos.png" width={30} height={30} className="imgNav"/>
              Partidos
            </Link>
            <Link className="nav-link" to="/pageApuesta">
            <img src="/img/apuesta.png" width={30} height={30} className="imgNav"/>
              Mis Predicciones
            </Link>
            <Link className="nav-link" to="/PageMisTorneos">
            <img src="/img/torneos.png" width={30} height={30} className="imgNav"/>
              Mis Torneos
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};
export default BarraNav;
