import React from "react";
import { backgrounds } from "../assets";

function Background() {
  const style = {
    width: "100dvw",
    height: "100dvh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backgrounds.bg1})`,
    backgroundPosition: "center",
    position: "fixed",
    top: 0,
  };
  return <div style={style} className="background"></div>;
}

export default Background;
