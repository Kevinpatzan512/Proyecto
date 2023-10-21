import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import "./index.css";

export const CardsTorneos = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <CardGroup className="grupoCards">
            <Card className="cardTorneo" variant="dark">
              <Card.Img className="imgTorneo" variant="top" src="/img/premierleague.png"></Card.Img>
              <Card.Body>
                <Card.Title>Premier League</Card.Title>
                <Card.Text>
                  Predice los resultados la jornada de la mejor liga del mundo.
                </Card.Text>
                <div className="botones">
                  <Link className="btn btn-primary" to="/predicPremier">Predice Ya</Link>
                </div>
              </Card.Body>
            </Card>
            <Card className="cardTorneo" variant="dark">
              <Card.Img className="imgTorneo" variant="top" src="/img/laliga.jpg"></Card.Img>
              <Card.Body>
                <Card.Title>La Liga</Card.Title>
                <Card.Text>
                  Elige ya los posibles resultados de la jornada de la
                  apasionante liga española.
                </Card.Text>
                <div className="botones">
                <Link className="btn btn-primary" to="/predicLaliga">Predice Ya</Link>
                </div>
              </Card.Body>
            </Card>
            <Card className="cardTorneo" variant="dark">
              <Card.Img className="imgTorneo" variant="top" src="/img/seriea.png"></Card.Img>
              <Card.Body>
                <Card.Title>Serie A</Card.Title>
                <Card.Text>
                  La liga italiana ya disponible para predecir los resultados de
                  su emocionante jornada.
                </Card.Text>
                <div className="botones">
                <Link className="btn btn-primary" to="/predicSeriea">Predice Ya</Link>
                </div>
              </Card.Body>
            </Card>
            <Card className="cardTorneo" variant="dark">
              <Card.Img className="imgTorneo" variant="top" src="/img/nba.jpg"></Card.Img>
              <Card.Body>
                <Card.Title>NBA</Card.Title>
                <Card.Text>
                  El mejor baloncesto del mundo aquí, elije ya tus ganadores de
                  la jornada.
                </Card.Text>
                <div className="botones">
                <Link className="btn btn-primary" to="/predicNBA">Predice Ya</Link>
                </div>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
