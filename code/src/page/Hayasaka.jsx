import React from "react";
import { useState } from "react";
import img1 from "../img/hey-hey-ai-hayasaaka.gif";
import img2 from "../img/hayasaka-hayasaka-bluff.gif";
import song from "../sound/Hey_hey.mp3";
import Nav from "../components/Nav";

const Hayasaka = () => {
  let [isPlay, setPlay] = useState(false);
  let audio = new Audio(song);
  let handle = () => {
    setPlay(!isPlay);
    if (!isPlay) audio.play();
    else audio.pause();
  };
  return (
    <>
      <Nav />
      <div
        className="App"
        style={{ backgroundColor: "blue", marginTop: "15vh", padding: "10px" }}
        onClick={handle}
      >
        <p
          style={{
            fontSize: "50px",
            fontSmooth: "auto",
            color: "white",
            margin: "10px",
          }}
        >
          She is so shy?
        </p>
        <p
          style={{
            fontSize: "25px",
            fontSmooth: "auto",
            color: "white",
            margin: "5px",
          }}
        >
          Don't touch
        </p>
        <img
          style={{ maxHeight: "40vh" }}
          src={isPlay ? img1 : img2}
          alt="ayasaka"
        ></img>
      </div>
    </>
  );
};

export default Hayasaka;
