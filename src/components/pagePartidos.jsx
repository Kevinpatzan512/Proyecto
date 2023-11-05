import React from "react";
import PartidosPremier from "./partidosPremier";
import PartidosLaliga from "./partidosLaliga";
import PartidosSeriea from "./partidosSeriea";
import PartidosNBA from "./partidosNBA";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import PartidosLigaArg from "./partidosLigaArg";
import PartidosLigue1 from "./partidosLigue1";
import PartidosBundesliga from "./partidosBundesliga";
import PartidosLigaES from "./partidosLigaES";

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
      <CardGroup>
        <Card>
          <Card.Body>
            <PartidosLigaArg />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicLigaArg">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <PartidosLigue1 />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicLigue1">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card>
          <Card.Body>
            <PartidosBundesliga />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicBundesliga">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <PartidosLigaES />
            <div className="botones">
                <Link className="btn btn-primary" to="/predicLigaES">Predice Ya</Link>
                </div>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};
export default PaginaPartidos;
