import React from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { VideoFondo } from "./fondo";

const PaginaRegistrarTorneos = () => {
return(
<>
<VideoFondo/>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={7} >
            <div className="formLogin bgLogin">
              <fieldset>
                <img
                  src="/img/torneo.png"
                  width={150}
                  height={150}
                  className="imgLogin"
                />
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Nombre del Torneo: </span>
                  <input type="text" id="" className="form-control"/>
                </div>
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Equipos Participantes: </span>
                  <input type="text" id="" className="form-control" />
                </div>
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Fecha de Inicio: </span>
                  <input type="text" id="" className="form-control" />
                </div>
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Fecha de Finalizacion: </span>
                  <input type="text" id="" className="form-control" />
                </div>
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Tipo de Torneo: </span>
                  <input type="text" id="" className="form-control" />
                </div>
                <div className="botones">
                  <Button variant="primary" className="btnLogin">
                    Registrar
                  </Button>
                </div>
              </fieldset>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
);
};
export default PaginaRegistrarTorneos;