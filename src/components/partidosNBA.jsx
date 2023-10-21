import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./index.css";

const PartidosNBA = () => {
  return (
    <>
    <Container>
      <Row>
        <Col></Col>
        <Col xs={10} className='text-center'> 
        <h1 className='pageSubitle nameNBA'>NBA</h1>
        <img src='img/NBA/logonba.png' className='logoLiga'/>
        <h4 className="pageText">Partidos de la Jornada</h4>
        <p><img src='img/NBA/heat.png' className="escudosImg"/>Miami Heat VS Brooklyn Nets<img src='img/NBA/nets.jpeg' className="escudosImg"/></p>
        <p><img src='img/NBA/spurs.png' className="escudosImg"/>San Antonio Spurs VS Houston Rockets<img src='img/NBA/rockets.png' className="escudosImg"/></p>
        <p><img src='img/NBA/warriors.png' className="escudosImg"/>Golden State Warriors VS Sacramento Kings<img src='img/NBA/kings.png' className="escudosImg"/></p>
        <p><img src='img/NBA/hornets.png' className="escudosImg"/>Charlotte Hornets VS Boston Celtics<img src='img/NBA/celtics.png' className="escudosImg"/></p>
        <p><img src='img/NBA/bulls.png' className="escudosImg"/>Chicago Bulls VS Minnesota Timberwolves<img src='img/NBA/wolves.jpeg' className="escudosImg"/></p>
        <p><img src='img/NBA/thunder.png' className="escudosImg"/>Oklahoma City Thunder VS Detroit Pistons<img src='img/NBA/pistons.png' className="escudosImg"/></p>
        <p><img src='img/NBA/clipers.png' className="escudosImg"/>Los Angeles Clippers VS Denver Nuggets<img src='img/NBA/nugets.png' className="escudosImg"/></p>
        <p><img src='img/NBA/lakers.png' className="escudosImg"/>Los Angeles Lakers VS Phoenix Suns<img src='img/NBA/suns.png' className="escudosImg"/></p>
        <p><img src='img/NBA/76.png' className="escudosImg"/>Philadelphia 76ers VS Atlanta Hawks<img src='img/NBA/hawks.png' className="escudosImg"/></p>
        <p><img src='img/NBA/pacers.png' className="escudosImg"/>Indiana Pacers VS Cleveland Cavaliers<img src='img/NBA/clavaliers.png' className="escudosImg"/></p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </>
  );
};

export default PartidosNBA;