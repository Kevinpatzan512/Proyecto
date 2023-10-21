import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import "./index.css";

export const Cuerpo = () => {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={10}>
          <h1 className="cuerpoTitle">Quinielas Deportivas</h1>
          <p className="textoBienvenido">
            Bienvenidos a Quinielas Deportivas! Donde la emoción y los deportes
            se unen. Demuestra tu habilidad pronosticando los resultados de tus
            eventos favoritos. Únete a la diversión. ¡Regístrate ahora y sé
            parte de la acción!
          </p>
          <div className="botones">
            <Link className="btn btn-dark btnLogin" to="/pageLogin">
              Registrarse
            </Link>
            <Link className="btn btn-dark btnLogin" to="/pagePartidos">
              Ver Partidos
            </Link>
          </div>
          <h1 className="cuerpoTitle">Torneos</h1>
          <p className="textoBienvenido"> La Premier League, La Liga, la Serie A italiana y la NBA son algunas de las ligas deportivas más destacadas del mundo. Cada una de ellas representa la cima de su respectivo deporte, atrayendo a talentos de élite y millones de aficionados en todo el planeta. Estas competiciones encarnan la emoción, la destreza y la competitividad en su máxima expresión. Predice ya los resultados jornada con nosotros. </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
