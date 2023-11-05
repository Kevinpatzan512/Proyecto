import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosBundesliga = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">Bundesliga</h1>
            <img src="/img/alemania.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/bundesliga/darmstadt98​.png" className="escudosImg"/>SV Darmstadt 98 VS Bochum<img src="img/bundesliga/bochum.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/unionberlin.png" className="escudosImg"/>Union Berlin VS Eintrancht Frankfurt<img src="img/bundesliga/eintrachtfrankfurt.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/freiburg.png" className="escudosImg"/>Friburgo VS Borussia Mönchengladbach<img src="img/bundesliga/bmonchengladbach.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/hoffenheim.png" className="escudosImg"/>Hoffenheim VS Bayer Leverkusen<img src="img/bundesliga/bayerleverkusen.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/mainz05.png" className="escudosImg"/>Mainz 05 VS RB Leipzig<img src="img/bundesliga/rbleipzig.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/koln.png" className="escudosImg"/>Köln VS Augsburgo<img src="img/bundesliga/augsburgo.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/borussiadortmund.png" className="escudosImg"/>Borussia Dortmund VS Bayern Munich<img src="img/bundesliga/bayernmunchen.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/wolfsburg.png" className="escudosImg"/>Wolfsburg VS Werder Bremen<img src="img/bundesliga/werderbremen.png" className="escudosImg"/></p>
            <p><img src="img/bundesliga/heidenheim.png" className="escudosImg"/>Heidenheim VS Stuttgart<img src="img/bundesliga/stuttgart.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosBundesliga;
