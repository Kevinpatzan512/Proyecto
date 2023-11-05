import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {gapi} from 'gapi-script'
import BarraNav from "./components/barraNav";
import PaginaApuesta from "./components/pageApuesta";
import PaginaPartidos from "./components/pagePartidos";
import PaginaTorneos from "./components/pageTorneos";
import { Footer } from "./components/footer";
import PaginaInicio from "./components/pageInicio";
import PaginaDev from "./components/pageDevs";
import PaginaLogin from "./components/pageLogin";
import PartidosPremier from "./components/partidosPremier";
import PartidosLaliga from "./components/partidosLaliga";
import PartidosSeriea from "./components/partidosSeriea";
import PartidosNBA from "./components/partidosNBA";
import PaginaRegistrarTorneos from "./components/pageRegistrarTorneos";
import PredicPremier from "./components/predicPremier";
import PredicLaliga from "./components/predicLaliga";
import PredicSeriea from "./components/predicSeriea";
import PredicNBA from "./components/predicNBA";
import PageMisTorneos from "./components/PageMisTorneos";
import PredicLigaArg from "./components/predicLigaArg";
import PredicLigue1 from "./components/predicLigue1";
import PredicBundesliga from "./components/predicBundesliga";
import PredicLigaES from "./components/predicLigaES";




const clientID = "358047457499-q5lpase27pnng391bn08ssvcajob165q.apps.googleusercontent.com";

function App() {

  useEffect(() => {
    function iniciar() {
      gapi.client.init({
        clientID:clientID,
        scope: ""
      })
    }
    gapi.load('client:auth2', iniciar)
  })

  return (
    <div className="App">
      <Router>
        <BarraNav />
        <Routes>
          <Route path="/" exact Component={PaginaLogin}></Route>
          <Route path="/pageInicio" Component={PaginaInicio}></Route>
          <Route path="/pageTorneos" Component={PaginaTorneos}></Route>
          <Route path="/pagePartidos" Component={PaginaPartidos}></Route>
          <Route path="/pageApuesta" Component={PaginaApuesta}></Route>
          <Route path="/PageMisTorneos" Component={PageMisTorneos}></Route>
          <Route path="/pageLogin" Component={PaginaLogin}></Route>
          <Route path="/pageRegistrarTorneos" Component={PaginaRegistrarTorneos}></Route>
        </Routes>
        <Routes>
          <Route path="/partidosPremier" Component={PartidosPremier}></Route>
          <Route path="/partidosLaliga" Component={PartidosLaliga}></Route>
          <Route path="/partidosSeriea" Component={PartidosSeriea}></Route>
          <Route path="/partidosNBA" Component={PartidosNBA}></Route>
          <Route path="/predicPremier" Component={PredicPremier}></Route>
          <Route path="/predicLaliga" Component={PredicLaliga}></Route>
          <Route path="/predicSeriea" Component={PredicSeriea}></Route>
          <Route path="/predicNBA" Component={PredicNBA}></Route>
          <Route path="/predicLigaArg" Component={PredicLigaArg}></Route>
          <Route path="/predicLigue1" Component={PredicLigue1}></Route>
          <Route path="/predicBundesliga" Component={PredicBundesliga}></Route>
          <Route path="/predicLigaES" Component={PredicLigaES}></Route>
        </Routes>
        
        <Routes>
          <Route path="/pageDevs" Component={PaginaDev}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
