import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosLaliga = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">La Liga</h1>
            <img src="/img/laliga/laliga.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/laliga/osasuna.png" className="escudosImg"/> Osasuna VS Granada <img src="img/laliga/granada.png" className="escudosImg"/></p>
            <p><img src="img/laliga/realsociedad.png" className="escudosImg"/> Real Sociedad VS Mallorca <img src="img/laliga/mallorca.png" className="escudosImg"/></p>
            <p><img src="img/laliga/getafe.png" className="escudosImg"/> Getafe VS Betis <img src="img/laliga/betis.png" className="escudosImg"/></p>
            <p><img src="img/laliga/sevilla.png" className="escudosImg"/> Sevilla VS Real Madrid <img src="img/laliga/realmadrid.png" className="escudosImg"/></p>
            <p><img src="img/laliga/celta.png" className="escudosImg"/> Celta de Vigo VS Atletico de Madrid <img src="img/laliga/atlmadrid.png" className="escudosImg"/></p>
            <p><img src="img/laliga/udlaspalmas.png" className="escudosImg"/> Las Palmas VS Rayo Vallecano <img src="img/laliga/rayovallecano.png" className="escudosImg"/></p>
            <p><img src="img/laliga/girona.png" className="escudosImg"/> Girona VS Almeria <img src="img/laliga/almeria.png" className="escudosImg"/></p>
            <p><img src="img/laliga/villarreal.png" className="escudosImg"/> Villarreal VS Alavés  <img src="img/laliga/alaves.png" className="escudosImg"/></p>
            <p><img src="img/laliga/athletic.png" className="escudosImg"/> Athletic Club VS Barcelona <img src="img/laliga/barcelona.png" className="escudosImg"/></p>
            <p><img src="img/laliga/valencia.png" className="escudosImg"/> Valencia VS Cadiz <img src="img/laliga/cadiz.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosLaliga;