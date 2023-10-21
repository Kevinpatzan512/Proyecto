import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <Navbar className="barraNav">
        <Container className="letraNav">
          <Navbar.Brand>
            <img
              src="/img/udb.png"
              height={75}
              width={75}
              className="imgNav"
            />
            Universidad Don Bosco 2023
          </Navbar.Brand>
          <Nav>
            <Link className="nav-link" to="/pageDevs">
              <img
                src="/img/devs.png"
                height={50}
                width={50}
                className="imgNav"
              />
              Desarrolladores
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
