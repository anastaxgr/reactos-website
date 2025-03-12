import React, { useRef } from "react";
import Draggable from "react-draggable";

// custom hooks
import useTheme from "@hooks/useTheme";

function DragableWindow({ title, children, onClose }) {
  const windowRef = useRef(null);

  const { darkTheme } = useTheme();

  const titlebarStyle = {
    backgroundColor: darkTheme ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.90)",
    color: darkTheme ? "#fff" : "#000",
  };

  const windowStyle = {
    backgroundColor: darkTheme ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.90)",
    backdropFilter: "blur( 8.5px )",
  };

  const contentStyle = {
    color: darkTheme ? "#fff" : "#000",
  };

  return (
    <Draggable nodeRef={windowRef} bounds="parent" cancel="main">
      <div className="window" ref={windowRef} style={windowStyle}>
        {/* window titlebar */}
        <div className="titlebar" style={titlebarStyle}>
          <div className="title">{title}</div>

          <div className="close" onClick={onClose} onTouchStart={onClose}>
            <i className="las la-times"></i>
          </div>
        </div>

        <main style={contentStyle}>{children}</main>
      </div>
    </Draggable>
  );
}

export default DragableWindow;
