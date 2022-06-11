import { useState } from "react";
import img1 from "../img/kaguya.jpg";
import img2 from "../img/kaguya2.jpg";
import song from "../sound/pop-cat.mp3";
import Nav from "../components/Nav";

import React from "react";

const Kaguya = () => {
  let [isClick, setClick] = useState(false);
  let audio = new Audio(song);
  const handle = () => {
    setClick(!isClick);
    if (!isClick) audio.play();
    else audio.pause();
  };
  return (
    <>
      <Nav />
      <div
        className="App"
        style={{ backgroundColor: isClick ? "red" : "black" }}
      >
        <p style={{ fontSize: "50px", fontSmooth: "auto", color: "white" }}>
          Don't touch Her
        </p>
        <img alt="kaguya" src={isClick ? img1 : img2} onClick={handle} />
      </div>
    </>
  );
};

export default Kaguya;
