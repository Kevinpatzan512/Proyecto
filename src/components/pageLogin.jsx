import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { VideoFondo } from "./fondo";

const PaginaLogin = () => {
  return (
    <>
      <VideoFondo/>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6} >
            <div className="formLogin bgLogin">
              <fieldset>
                <img
                  src="/img/user.png"
                  width={150}
                  height={150}
                  className="imgLogin"
                />
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Correo Electrónico: </span>
                  <input
                    type="email"
                    id=""
                    className="form-control"
                    placeholder="ejemplo@gmail.com"
                  />
                </div>
                <div className="input-group flex-nowrap inputLogin">
                  <span className="input-group-text">Contraseña: </span>
                  <input type="password" id="" className="form-control" />
                </div>
                <div className="botones">
                  <Button variant="info" className="btnLogin">
                    <img
                      src="/img/google.png"
                      width={20}
                      height={20}
                      className="imgBtn"
                    />
                    Registrarse con Google
                  </Button>
                  <Button variant="primary" className="btnLogin">
                    Ingresar
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
export default PaginaLogin;
