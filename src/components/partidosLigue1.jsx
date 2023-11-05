import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosLigue1 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">Ligue 1</h1>
            <img src="/img/francia.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/ligue1/psg.png" className="escudosImg"/>PSG VS Montpellier<img src="img/ligue1/montpellier.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/lorient.png" className="escudosImg"/>Lorient VS Lens<img src="img/ligue1/racinglens.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/olimpiquemarsella.png" className="escudosImg"/>Olimpique Marsella VS LOSC Lille<img src="img/ligue1/lille.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/olympiquelyon.png" className="escudosImg"/>Olympique Lyon VS Metz<img src="img/ligue1/metz.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/toulouse.png" className="escudosImg"/>Toulouse VS Le Havre<img src="img/ligue1/havre.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/nantes.png" className="escudosImg"/>Nantes VS Stade Reims<img src="img/ligue1/stadereims.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/racingetrasburgo.png" className="escudosImg"/>Racing de Estrasburgo VS Clermont Foot<img src="img/ligue1/clermont.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/monaco.png" className="escudosImg"/>Monaco VS Stade Brestois<img src="img/ligue1/stadebretois.png" className="escudosImg"/></p>
            <p><img src="img/ligue1/niza.png" className="escudosImg"/>Niza VS Rennes<img src="img/ligue1/rennais.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosLigue1;
