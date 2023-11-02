import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { VideoFondo } from "./fondo";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";


const clientID =
  "358047457499-q5lpase27pnng391bn08ssvcajob165q.apps.googleusercontent.com";

const PaginaLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();


  const handleSuccess = (credentialResponse) => {
    console.log(credentialResponse, "Inicio de sesión exitoso");
    setSuccessMessage("Inicio de sesión exitoso");
    navigate('/pageInicio');
  };

  const handleError = () => {
    setErrorMessage("Error: El inicio de sesión falló");
  };

  return (
    <>
      <VideoFondo />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={5}>
            <div className="formLogin bgLogin">
              <fieldset>
                <img
                  src="/img/user.png"
                  width={150}
                  height={150}
                  className="imgLogin"
                />
                <div id="signInButton" className="btnLogin">
                  <GoogleOAuthProvider clientId={clientID}>
                    <GoogleLogin
                      onSuccess={handleSuccess}
                      onError={handleError}
                    />
                  </GoogleOAuthProvider>
                </div>
              </fieldset>
              {successMessage && (
                <div className="text-center">{successMessage}</div>
              )}
              {errorMessage && (
                <div className="text-center text-danger">{errorMessage}</div>
              )}
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default PaginaLogin;
