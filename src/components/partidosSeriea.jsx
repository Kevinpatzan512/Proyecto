import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosSeriea = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">Serie A</h1>
            <img src="/img/seriea/seriea.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/seriea/hellasverona.png" className="escudosImg"/> Hellas Verona VS Napoli  <img src="/img/seriea/napoli.png" className="escudosImg"/></p>
            <p><img src="img/seriea/torino.png" className="escudosImg"/> Torino VS Inter  <img src="/img/seriea/inter.png" className="escudosImg"/></p>
            <p><img src="img/seriea/sassuolo.png" className="escudosImg"/> Sassuolo VS Lazio <img src="/img/seriea/lazio.png" className="escudosImg"/></p>
            <p><img src="img/seriea/roma.png" className="escudosImg"/> Roma VS Monza <img src="/img/seriea/monza.png" className="escudosImg"/></p>
            <p><img src="img/seriea/salernitana.png" className="escudosImg"/> Salernitana VS Cagliari <img src="/img/seriea/cagliari.png" className="escudosImg"/></p>
            <p><img src="img/seriea/bologna.png" className="escudosImg"/> Bolonia VS Frosinone <img src="/img/seriea/frosinone.png" className="escudosImg"/></p>
            <p><img src="img/seriea/atalanta.png" className="escudosImg"/> Atalanta VS Genoa  <img src="/img/seriea/genoa.png" className="escudosImg"/></p>
            <p><img src="img/seriea/milan.png" className="escudosImg"/> Milan VS Juventus <img src="/img/seriea/juventus.png" className="escudosImg"/></p>
            <p><img src="img/seriea/udinese.png" className="escudosImg"/> Udinese VS Lecce <img src="/img/seriea/lecce.png" className="escudosImg"/></p>
            <p><img src="img/seriea/fiorentina.png" className="escudosImg"/> Fiorentina VS Empoli <img src="/img/seriea/empoli.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosSeriea;