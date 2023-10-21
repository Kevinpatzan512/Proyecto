import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { VideoFondo } from "./fondo";
const PaginaDev = () => {
  return (
    <>
    <VideoFondo/>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <CardGroup className="grupoDevs">
              <Card className="cardTorneo" variant="dark">
                <Card.Img
                  className="imgTorneo"
                  variant="top"
                  src="/img/premierleague.png"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Javier Escobar</Card.Title>
                  <Card.Text>EP230745
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardTorneo" variant="dark">
                <Card.Img
                  className="imgTorneo"
                  variant="top"
                  src="/img/premierleague.png"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Kevin Madrid</Card.Title>
                  <Card.Text>MP222761</Card.Text>
                </Card.Body>
              </Card>
              <Card className="cardTorneo" variant="dark">
                <Card.Img
                  className="imgTorneo"
                  variant="top"
                  src="/img/premierleague.png"
                ></Card.Img>
                <Card.Body>
                  <Card.Title>Axel Chavarria</Card.Title>
                  <Card.Text>CH232351</Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};
export default PaginaDev;
