import React, { useCallback } from "react";
//import "../App.css";
import styled from "styled-components";
import ParticlesBg from "particles-bg";
import { useHistory } from "react-router-dom";
import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import "react-buzzfeed-quiz/lib/styles.css";
import superMario from "./images/supermario.jpg";
import risk from "./images/risk.jpg";
import dixit from "./images/dixit.jpg";
import duda from "./images/duda.png";

import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { VerticalAlignBottom, VerticalAlignCenter } from "@material-ui/icons";
import { ComparisonSlider } from "react-comparison-slider";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    //backgroundColor: "rgba(113, 255, 132, 0.9)",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "35%",
  },
}));

function Fin() {
  const history = useHistory();

  const classes = useStyles();
  const [openCorrect, setOpenCorrect] = React.useState(false);
  const [openWrong, setOpenWrong] = React.useState(false);

  const handleOpenCorrect = () => {
    setOpenCorrect(true);
  };

  const handleCloseCorrect = () => {
    setOpenCorrect(false);
  };
  const handleOpenWrong = () => {
    setOpenWrong(true);
  };

  const handleCloseWrong = () => {
    setOpenWrong(false);
  };
  // Some random colors
  const Button = styled.button`
    // display: inline-block;
    color: rgba(73, 255, 98, 1);
    font-size: 2em;
    //margin: 1em;
    margin-top: 10%;
    margin-left: 37%;
    padding: 0.25em 1em;
    border: 2px solid rgba(73, 255, 98, 0.7);
    border-radius: 3px;
    &:hover {
      background-color: rgba(73, 255, 98, 0.7);
      color: white;
    }

    //display: block;
  `;
  const ButtonWrong = styled.button`
    // display: inline-block;
    color: rgba(254, 25, 25, 1);
    font-size: 1.7em;
    //margin: 1em;
    margin-top: 10%;
    margin-left: 10%;
    padding: 0.25em 1em;
    border: 2px solid rgba(254, 25, 25, 0.7);
    border-radius: 3px;
    &:hover {
      background-color: rgba(254, 25, 25, 0.7);
      color: white;
    }

    //display: block;
  `;
  const H2 = styled.h2`
    margin-top: 1em;
    font-size: 2em;
    font-family: "Shadows Into Light", cursive;
  `;
  const H3 = styled.h3`
    margin-top: 1em;
    font-size: 2em;
    font-family: "Shadows Into Light", cursive;
    color: red;
    background-color: gray;
  `;
  const Section = styled.section`
    padding: 45px;
    font-size: 1.1rem;
    color: #c5c7c6;
    line-height: 1.8;
  `;

  const Pregunta = styled.div`
    padding: 1em;
    font-size: 1.1rem;
    color: #c5c7c6;
    line-height: 1.8;
    background-color: rgba(0, 0, 0, 0.7);
    width: 40%;
    margin-left: 30%;
  `;
  const Respuesta1 = styled.div`
    padding: 1em;
    margin-top: 1em;
    font-size: 0.8em;
    color: black;
    line-height: 1.8;
    background-color: rgba(242, 242, 12, 0.7);
    width: 40%;
    margin-left: 30.25%;
    &:hover {
      background-color: rgba(242, 242, 12, 1);
      //color: white;
    }
  `;
  const Respuesta2 = styled.div`
    padding: 1em;
    margin-top: 1em;
    font-size: 0.8em;
    color: black;
    line-height: 1.8;
    background-color: rgba(48, 255, 244, 0.7);
    width: 40%;
    margin-left: 30.25%;
    &:hover {
      background-color: rgba(48, 255, 244, 1);
      //color: white;
    }
  `;
  const Respuesta3 = styled.div`
    padding: 1em;
    margin-top: 1em;
    font-size: 0.8em;
    color: black;
    line-height: 1.8;
    background-color: rgba(255, 113, 177, 0.7);
    width: 40%;
    margin-left: 30.25%;
    &:hover {
      background-color: rgba(255, 113, 177, 1);
      //color: white;
    }
  `;
  const ModalTitle = styled.h2`
    text-align: center;
  `;
  const ModalDescription = styled.p`
    text-align: center;
  `;
  const ModalPremioText = styled.p`
    text-align: center;
    font-weight: bold;
  `;

  const ImagenRespuesta = styled.img`
    height: 40px;
  `;
  const TextCarrousel = styled.h3`
    margin-top: 1em;
    font-size: 3em !important;
    font-family: "Caveat", cursive;
    color: black;
    width: 50%;
    margin-left: 23%;
    background-color: rgba(143, 143, 134, 0.54);
  `;
  const DivBackgroud = styled.div`
    background-image: url(${dixit});
    height: 100%;
  `;
  /** With Customised `handle`. */
  const CustomHandle = ({ style, ...props }) => {
    const handlePositionChange = useCallback(
      (position) => console.log("[Portrait]", position),
      []
    );

    return (
      <ReactCompareSlider
        {...props}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              color: "#333",
            }}
            portrait=""
          />
        }
        itemOne={
          <ReactCompareSliderImage
            src="https://images.unsplash.com/photo-1580458148391-8c4951dc1465?auto=format&fit=crop&w=1280&q=80"
            style={{ filter: "grayscale(1)" }}
            alt="one"
          />
        }
        itemTwo={<TextFin></TextFin>}
        onPositionChange={handlePositionChange}
        style={{
          display: "flex",
          width: "100%",
          height: "50vh",
          ...style,
        }}
      />
    );
  };
  const TextFin = () => {
    return (
      <DivBackgroud>
        <h2>
          Bueno... parece que esto ha llegado a su fin. Pero no antes de
          recordar el por qué de este Juego.
        </h2>
        <h2>Pero no antes de recordar el por qué de este Juego.</h2>
        <h3>
          Si, Tú! esa persona que siempre está cuando lo necesito y cuando no,
          esa persona que me alegra cada mañana solo con un "buenos días", esa
          persona con la que compartiria una y mil vidas llenas de logros y
          derrotas, esa persona que me da fuerzas para avanzar y me da calma
          para pensar y esa persona que es capaz de endulzar cada momento amargo
          con un "bocaillo". Por todo esto y más he realizado esto, por que un
          dia alguien me dijo que pensara quien se merece que le de parte de mí
          y quien no.
        </h3>
      </DivBackgroud>
    );
  };
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
      <CustomHandle position={0} style={undefined} />
      {/*  <ReactCompareSlider
        itemOne={<TextFin></TextFin>}
        itemTwo={
          <ReactCompareSliderImage
            src={superMario}
             alt="Image two"
          />
        }
      /> */}
      {/*    <h2>
        Bueno... parece que esto ha llegado a su fin. Pero no antes de recordar
        el por qué de este Juego.
      </h2>
      <h2>Pero no antes de recordar el por qué de este Juego.</h2>
      <h3>
        Si, Tú! esa persona que siempre está cuando lo necesito y cuando no, esa
        persona que me alegra cada mañana solo con un "buenos días", esa persona
        con la que compartiria una y mil vidas llenas de logros y derrotas, esa
        persona que me da fuerzas para avanzar y me da calma para pensar y esa
        persona que es capaz de endulzar cada momento amargo con un "bocaillo".
        Por todo esto y más he realizado esto, por que un dia alguien me dijo
        que pensara quien se merece que le de parte de mí y quien no.
      </h3> */}
      {/*  <Carousel>
        <div>
          <TextCarrousel className="legend"></TextCarrousel>
          <img src={superMario} />

          <div style={{ textAlign: "center" }}>
            <p
              className="legend"
              style={{
                fontSize: "2em",
                marginBottom: "20%",
                backgroundColor: "black",
                width: "60%",
                marginLeft: "1%",
                marginRight: "4%",
              }}
            >
              Bueno... parece que esto ha llegado a su fin. Pero no antes de
              recordar el por qué de este Juego.
            </p>
          </div>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}

      {/* <ParticlesBg type="custom" config={config} bg={true} /> */}
    </div>
  );
}

export default Fin;
