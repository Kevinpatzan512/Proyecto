import React from "react";
import { CardsTorneos } from "./torneosPrinc";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import PaginaRegistrarTorneos from "./pageRegistrarTorneos";
import { CardsTorneosEx } from "./torneosExtra";

const PaginaTorneos = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <h1 className="pageTitle">Torneos</h1>
          <p className="pageText">
            {" "}
            La Premier League, La Liga, la Serie A italiana y la NBA son algunas
            de las ligas deportivas más destacadas del mundo. Cada una de ellas
            representa la cima de su respectivo deporte, atrayendo a talentos de
            élite y millones de aficionados en todo el planeta. Estas
            competiciones encarnan la emoción, la destreza y la competitividad
            en su máxima expresión. Predice ya los resultados jornada con
            nosotros.{" "}
          </p>
        </Col>
        <Col></Col>
        <CardsTorneosEx />
      </Row>
      <Row>
        <Col></Col>
        <Col xs={10} className="regisTorneo">
          <h1 className="pageSubtitle">¿No encuentra su Torneo Favorito?</h1>
          <p className="pageText">
            Llene el siguiente formulario y registre su torneo favorito.
          </p>
          <div className="botones">
          <Link className="btn btn-primary" to="/PageRegistrarTorneos">Registrar Torneo</Link>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
export default PaginaTorneos;
