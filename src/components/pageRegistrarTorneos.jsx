import React, { useState, useRef } from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios"; 
import { VideoFondo } from "./fondo";
import Cant4Partidos from "./cant4Partidos";
import Cant8Partidos from "./cant8Partidos";
import Cant10Partidos from "./cant10Partidos";

const PaginaRegistrarTorneos = () => {
  const [cantidadPartidos, setCantidadPartidos] = useState("4");
  const [nombreTorneo, setNombreTorneo] = useState("");
  const [partidos, setPartidos] = useState([]);
  const [errorNombre, setErrorNombre] = useState("");
  const [errorPartidos, setErrorPartidos] = useState("");
  const formRef = useRef(null);
  const [torneos, setTorneos] = useState([]);
  const [haRegistradoTorneo, setHaRegistradoTorneo] = useState(false);
  const [mostrarTorneo, setMostrarTorneo] = useState(false);
  const [nextTorneoId, setNextTorneoId] = useState(1);

  const handleCantidadPartidosChange = (event) => {
    setCantidadPartidos(event.target.value);
  };

  const handleNombreTorneoChange = (event) => {
    setNombreTorneo(event.target.value);
  };

  const handleRegistrarClick = async () => {
    if (nombreTorneo.length < 4) {
      setErrorNombre("El nombre del torneo debe tener al menos 4 caracteres.");
      return;
    } else {
      setErrorNombre("");
    }

    let valid = true;

    for (let i = 1; i <= parseInt(cantidadPartidos); i++) {
      const localInput = document.getElementById(`local${i}`);
      const visitanteInput = document.getElementById(`visitante${i}`);

      if (localInput.value.length < 4 || visitanteInput.value.length < 4) {
        valid = false;
        setErrorPartidos(
          "Por favor, ingrese al menos 4 caracteres en todos los campos de equipos."
        );
        break;
      }
    }

    if (valid) {
      const newPartidos = [];

      for (let i = 1; i <= parseInt(cantidadPartidos); i++) {
        const localInput = document.getElementById(`local${i}`);
        const visitanteInput = document.getElementById(`visitante${i}`);

        if (localInput && visitanteInput) {
          newPartidos.push({
            id: `match${i}`,
            local: localInput.value,
            visitante: visitanteInput.value,
          });
        }
      }

      const torneoData = {
        id: nextTorneoId,
        nombre: nombreTorneo,
        partidos: newPartidos,
      };

      setNextTorneoId(nextTorneoId + 1);


      axios
        .post("http://localhost:5000/api/registrar-torneo", torneoData)
        .then((response) => {
          if (response.status === 201) {
            setPartidos(newPartidos);
            setErrorPartidos("");
            console.log(newPartidos);
            setTorneos([...torneos, torneoData]);
            setHaRegistradoTorneo(true);
            formRef.current.reset();
            setMostrarTorneo(false);
          } else {
            const errorData = response.data;
            setErrorPartidos(errorData.error);
          }
        })
        .catch((error) => {
          console.error("Error al enviar datos al servidor", error);
        });
    }
  };

  const handleMostrarTorneoClick = () => {
    if (torneos.length > 0) {
      setMostrarTorneo(!mostrarTorneo);
    } else {
      alert("No se ha registrado ningún torneo todavía.");
    }
  };

  return (
    <>
      <VideoFondo />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={8}>
            <div className="formLogin bgLogin">
              <fieldset>
                <img
                  src="/img/torneo.png"
                  width={150}
                  height={150}
                  className="imgLogin"
                />
                <form ref={formRef}>
                  <div className="input-group">
                    <span className="input-group-text">
                      Nombre del Torneo:{" "}
                    </span>
                    <input
                      type="text"
                      id="nombreTorneo"
                      className="form-control"
                      onChange={handleNombreTorneoChange}
                    />
                    <div className="error-message text-center text-danger">
                      {errorNombre}
                    </div>
                  </div>
                  <div className="input-group">
                    <span className="input-group-text">
                      Cantidad de Partidos:{" "}
                    </span>
                    <select
                      className="form-select"
                      onChange={handleCantidadPartidosChange}
                      value={cantidadPartidos}
                    >
                      <option value="4">4</option>
                      <option value="8">8</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                  {cantidadPartidos === "4" && <Cant4Partidos />}
                  {cantidadPartidos === "8" && <Cant8Partidos />}
                  {cantidadPartidos === "10" && <Cant10Partidos />}
                  <div className="error-message text-center text-danger">
                    {errorPartidos}
                  </div>
                  <div className="botones">
                    <Button
                      variant="primary"
                      className="btnLogin"
                      onClick={handleRegistrarClick}
                    >
                      Registrar
                    </Button>
                    <Button
                      variant="secondary"
                      className="btnLogin"
                      onClick={handleMostrarTorneoClick}
                    >
                      Mostrar Torneos
                    </Button>
                  </div>
                  {mostrarTorneo && torneos.length > 0 ? (
                    <div className="torneo-info">
                      <h2>Torneos Registrados</h2>
                      {torneos.map((torneo, index) => (
                        <div key={index}>
                          <h4>{`Torneo: ${torneo.nombre}`}</h4>
                          <h6>Partidos</h6>
                          <ul>
                            {torneo.partidos.map((partido, partidoIndex) => (
                              <li key={partido.id}>{`Partido ${
                                partidoIndex + 1
                              }: ${partido.local} vs ${partido.visitante}`}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </form>
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
