import React from "react";
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

function Pregunta3() {
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
    font-family: "Caveat", cursive;
  `;
  const H3 = styled.h3`
    margin-top: 1em;
    font-size: 2em;
    font-family: "Caveat", cursive;
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
      <H3>
        "??Atenci??n! ??Si aciertas tu GordiFuchi te dara un besillo, pero si
        fallas... atente a las consecuencias ya que deberas recibir un bocaillo!
        <br /> as?? que elige con cuidado... Muajajajaja"
        {/*  "??Atenci??n! ??Si fallas tu GordiFuchi debera de darte un bocaillo y si
        aciertas te dara un besillo! <br /> as?? que elige con cuidado...
        Muajajajaja" */}
      </H3>
      <Pregunta>
        <H2>
          Pregunta 3: Espera... ??Un juego dentro de un juego?
          <br /> Entramos en la parte dificil, as?? te lo narro...
        </H2>
      </Pregunta>
      <Respuesta1 onClick={handleOpenWrong}>
        <H2>
          Super mario 64 <ImagenRespuesta src={duda} />
        </H2>
      </Respuesta1>
      <Respuesta2 onClick={handleOpenWrong}>
        <H2>
          Risk <ImagenRespuesta src={duda} />
        </H2>
      </Respuesta2>
      <Respuesta3 onClick={handleOpenCorrect}>
        <H2>
          Dixit <ImagenRespuesta src={duda} />
        </H2>
      </Respuesta3>
      {/*  title: "Ooooooh! parece que has fallado gordi....", description: "??No pasa
      nada! ??pulsa en retake para volver a intentarlo!", */}
      {/* "??Te has ganado un Besillo! a parte de tu premio... claro.", */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openCorrect}
        onClose={handleCloseCorrect}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCorrect}>
          <div className={classes.paper}>
            <ModalTitle id="transition-modal-title">
              ??Enhorabuena! ??Te has ganado un Besillo!
            </ModalTitle>
            <ModalDescription id="transition-modal-description">
              a parte de tu regalo... claro.
            </ModalDescription>
            <ModalDescription id="transition-modal-description">
              Con este obsequio podr??s recorrer todos los parajes naturales cual
              cabrilla alocada sin miedo a romperte un tobillo.
            </ModalDescription>
            <ModalPremioText id="transition-modal-description">
              ??Girate para Recibir t?? regalo!
            </ModalPremioText>
            <Button onClick={() => history.push("/pregunta4")}>
              Siguiente
            </Button>
          </div>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openWrong}
        onClose={handleCloseWrong}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openWrong}>
          <div className={classes.paper}>
            <ModalTitle id="transition-modal-title">
              ??MAL! ??Te has ganado un Bocaillo!
            </ModalTitle>
            <ModalDescription id="transition-modal-description">
              ??Esto te pasa por malilla!
            </ModalDescription>
            <ButtonWrong onClick={handleCloseWrong}>
              Intentar de nuevo...
            </ButtonWrong>
          </div>
        </Fade>
      </Modal>
      <ParticlesBg type="custom" config={config} bg={true} />
    </div>
  );
}

export default Pregunta3;
