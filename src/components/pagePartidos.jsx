import React from "react";
import PartidosPremier from "./partidosPremier";
import PartidosLaliga from "./partidosLaliga";
import PartidosSeriea from "./partidosSeriea";
import PartidosNBA from "./partidosNBA";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";



const PaginaPartidos = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Body>
            <PartidosPremier />
            <div className="botones">
                  <Link className="btn btn-primary" to="/predicPremier">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <PartidosLaliga />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicLaliga">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Body>
            <PartidosSeriea />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicSeriea">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <PartidosNBA />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicNBA">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};
export default PaginaPartidos;
