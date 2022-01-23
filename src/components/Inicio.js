import React from "react";
//import "../App.css";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import { useHistory } from "react-router-dom";
import caraSudorFrio from "./images/carasudorfrio.png";

function Inicio() {
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
  const Imagen = styled.img`
    height: 40px;
  `;
  const H1 = styled.h1`
    margin-top: 20%;
    font-size: 6em;
    font-family: "Courgette", cursive;
  `;
  const H2 = styled.h2`
    margin-top: 2%;
    font-size: 2em;
    font-family: "Courgette", cursive;
  `;
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    alpha: [0.6, 0],
    scale: [0.1, 0.4],
    position: "all",
    color: ["random", "#ff0000"],
    cross: "dead",
    // emitter: "follow",
    random: 15,
  };

  if (Math.random() > 0.85) {
    config = Object.assign(config, {
      onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(
          particle.p.x,
          particle.p.y,
          particle.radius * 2,
          particle.radius * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      },
    });
  }
  return (
    <div className="App">
      {/* <ParticlesBg type="color" bg={true} /> */}
      <H1>¡Feliz Cumpleaños GordiFuchi!</H1>
      <H2>
        aunque un poco atrasado... <Imagen src={caraSudorFrio} />
      </H2>
      <Button onClick={() => history.push("/introduccion")}>Entrar</Button>
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
}

export default Inicio;
