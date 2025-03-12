import React, { useRef, useState } from "react";
import useTheme from "@hooks/useTheme";
import useWindow from "@hooks/useWindow";

import Draggable from "react-draggable";

function MusicPlayer() {
  const nodeRef = useRef(null);

  const [playing, setIsPlaying] = useState(false);

  const { isOpen, close } = useWindow();

  const { darkTheme } = useTheme();

  const style = {
    backgroundColor: darkTheme ? "rgba(0,0,0,0.80)" : "rgba(255,255,255,0.80)",
    color: darkTheme ? "#fff" : "#000",
    backdropFilter: "blur( 8.5px )",
  };

  if (!isOpen("music")) {
    return null;
  }
  
  return (
    <Draggable nodeRef={nodeRef} bounds="parent">
      <div className="musicplayer" ref={nodeRef} style={style}>
        <div className="closer">
          <span className="lnr lnr-cross"></span>
        </div>
        <div className="container">
          <div className="vinyl" data-playing={playing}></div>
          <div className="details">
            <div className="trackname">Nothing Else Matters</div>
          </div>

          <div className="buttons">
            <div className="btn">
              <i className="las la-angle-left"></i>
            </div>
            <div className="btn">
              <i className="las la-pause"></i>
            </div>
            <div className="btn">
              <i className="las la-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default MusicPlayer;
