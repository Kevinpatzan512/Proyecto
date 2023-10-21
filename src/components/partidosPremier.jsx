import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosPremier = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">Premier League</h1>
            <img src="/img/premierleague/premierleague.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/premierleague/liverpool.png" className="escudosImg"/> Liverpool VS Everton <img src="/img/premierleague/everton.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/brentford.png" className="escudosImg"/> Brentford VS Burnley <img src="/img/premierleague/burnley.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/bournemouth.png" className="escudosImg"/> Bournemouth VS Wolves <img src="/img/premierleague/wolves.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/nottingham_forest.png" className="escudosImg"/> Nottingham Forest VS Luton Town <img src="/img/premierleague/luton_town.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/manchestercity.png" className="escudosImg"/> Manchester City VS Brighton & Hove <img src="/img/premierleague/brighton.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/newcastle.png" className="escudosImg"/> Newcastle United VS Crystal Palace <img src="/img/premierleague/crystalpalace.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/chelsea.png" className="escudosImg"/> Chelsea VS Arsenal <img src="/img/premierleague/arsenal.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/sheffield.png" className="escudosImg"/> Sheffield United VS Manchester United <img src="/img/premierleague/manchesterunited.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/astonvilla.png" className="escudosImg"/> Aston Villa VS West Ham <img src="/img/premierleague/westham.png" className="escudosImg"/></p>
            <p><img src="img/premierleague/tottenham.png" className="escudosImg"/> Tottenham VS Fulham <img src="/img/premierleague/fulham.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosPremier;
