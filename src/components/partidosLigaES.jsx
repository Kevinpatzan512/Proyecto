import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosLigaES = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">Liga Mayor de El Salvador</h1>
            <img src="/img/ligaes.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/ligamayor/jocoro.png" className="escudosImg"/>Jocoro VS Municipal Limeño<img src="img/ligamayor/municipal_lime.png" className="escudosImg"/></p>
            <p><img src="img/ligamayor/isidro_metapan.png" className="escudosImg"/>Isidro Metapán VS Aguila<img src="img/ligamayor/cdaguila.png" className="escudosImg"/></p>
            <p><img src="img/ligamayor/alianzafc.png" className="escudosImg"/>Alianza VS Once Deportivo<img src="img/ligamayor/oncedeportivo.png" className="escudosImg"/></p>
            <p><img src="img/ligamayor/fas.png" className="escudosImg"/>FAS VS Platense<img src="img/ligamayor/platense.png" className="escudosImg"/></p>
            <p><img src="img/ligamayor/dragon.png" className="escudosImg"/>Dragón VS Firpo<img src="img/ligamayor/la_firpo.png" className="escudosImg"/></p>
            <p><img src="img/ligamayor/santatecla.png" className="escudosImg"/>Santa Tecla VS Fuerte San Francisco<img src="img/ligamayor/fuerte.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosLigaES;
