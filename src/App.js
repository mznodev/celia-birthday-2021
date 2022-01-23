import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Inicio from "components/Inicio";
import Pregunta1 from "components/Pregunta1";
import Introduccion from "components/Introduccion";
import Pregunta2 from "components/Pregunta2";
import Pregunta3 from "components/Pregunta3";
import Fin from "components/Fin";
import Pregunta4 from "components/Pregunta4";
/* import Inicio from "components/inicio"; */

function App() {
  const history = useHistory();
  // Some random colors
  const Button = styled.button`
    // display: inline-block;
    color: palevioletred;
    font-size: 2em;
    //margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    &:hover {
      background-color: palevioletred;
      color: white;
    }

    //display: block;
  `;
  const H1 = styled.h1`
    margin-top: 20%;
    font-size: 6em;
    font-family: "Caveat", cursive;
  `;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/introduccion">{<Introduccion />}</Route>
          <Route path="/pregunta1">{<Pregunta1 />}</Route>
          <Route path="/pregunta2">{<Pregunta2 />}</Route>
          <Route path="/pregunta3">{<Pregunta3 />}</Route>
          <Route path="/pregunta4">{<Pregunta4 />}</Route>
          <Route path="/fin">{<Fin />}</Route>
          <Route path="/">
            <Inicio />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
