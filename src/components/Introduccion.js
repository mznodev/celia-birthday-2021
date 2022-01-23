import React from "react";
//import "../App.css";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import { useHistory } from "react-router-dom";

function Introduccion() {
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
    margin-top: 10%;
    font-size: 5em;
    line-height: 0.1em;
    font-family: "Courgette", cursive;
  `;
  const H2 = styled.h2`
    font-size: 2em;
    font-family: "Courgette", cursive;
  `;
  const P = styled.p`
    font-size: 1.55em;
    font-family: "Courgette", cursive;
  `;
  return (
    <div className="App">
      <ParticlesBg type="color" bg={true} />
      <H1>Introducción</H1>
      <H2>
        Bueno, aquí estamos gordi, Como las manualidades son son mi fuerte...
      </H2>
      <H2>¡He decidido hacerlo de la mejor forma que sé!</H2>
      <H2>
        y esta no es otra que poniendo toda mi intención y mi buena fé en una
        cosa única solo para tí.
      </H2>
      <H2>Deberas afrontar el gran reto de... "Las preguntas endiabladas"</H2>
      <P>
        El reto consistirá en hacer un quiz complejisimo en el cual... ¡deberas
        mostrar toda tú valia!
      </P>
      <H2>¿Te atreves?</H2>
      <Button onClick={() => history.push("/Pregunta1")}>¡Vamos Alla!</Button>
      <ParticlesBg type="circle" bg={true} />
    </div>
  );
}

export default Introduccion;
