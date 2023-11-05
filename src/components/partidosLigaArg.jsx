import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const PartidosLigaArg = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10} className="text-center">
            <h1 className="pageSubitle nameLiga">Liga Argentina</h1>
            <img src="/img/argentina2.png" className="logoLiga"/>
            <h4 className="pageText">Partidos de la Jornada</h4>
            <p><img src="img/primeradivision/arsenal.png" className="escudosImg"/> Arsenal VS Gimnasia <img src="img/primeradivision/gimnasia.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/river.png" className="escudosImg"/>River Plate  VS Huracán  <img src="img/primeradivision/huracan.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/argentinos.png" className="escudosImg"/>Argentinos Juniors VS Instituto <img src="img/primeradivision/instituto.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/atleticotucuman.png" className="escudosImg"/> Atlético Tucumán VS Independiente  <img src="img/primeradivision/independiente.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/velez.png" className="escudosImg"/>Vélez Sarsfield VS Talleres<img src="img/primeradivision/talleres.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/union.png" className="escudosImg"/> Unión  VS Lanús<img src="img/primeradivision/lanus.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/racing.png" className="escudosImg"/>Racing Club  VS Central Córdoba <img src="img/primeradivision/centralcordoba.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/estudiantes.png" className="escudosImg"/> Estudiantes de la Plata VS Defensa y Justicia <img src="img/primeradivision/defensa.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/newells.png" className="escudosImg"/> Newell's Old Boys VS Sarmiento  <img src="img/primeradivision/sarmiento.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/godoycruz.png" className="escudosImg"/> Godoy Cruz VS Platense <img src="img/primeradivision/platense.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/barracas.png" className="escudosImg"/> Barracas Central VS Rosario Central  <img src="img/primeradivision/rosariocentral.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/belgrano.png" className="escudosImg"/> Belgrano VS Tigre <img src="img/primeradivision/tigre.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/banfield.png" className="escudosImg"/> Banfield  VS Colon <img src="img/primeradivision/colon.png" className="escudosImg"/></p>
            <p><img src="img/primeradivision/sanlorenzo.png" className="escudosImg"/> San Lorenzo VS Boca Juniors <img src="img/primeradivision/boca.png" className="escudosImg"/></p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PartidosLigaArg;
