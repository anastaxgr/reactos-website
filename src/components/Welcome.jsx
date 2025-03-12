import React, { useRef, useState, useEffect } from "react";

// custom hooks
import useTheme from "@hooks/useTheme";
import DragableWindow from "./DragableWindow";

function Welcome() {
  const { darkTheme } = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("welcomeSeen");
    if (!hasSeenWelcome) {
      setShow(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("welcomeSeen", "true");
    setShow(false);
  };

  const iRef = useRef(null);

  const textColors = {
    color: darkTheme ? "#fff" : "#000",
  };

  const infobox = {
    backgroundColor: darkTheme
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.05)",
  };

  if (!show) return null;

  return (
    <DragableWindow nodeRef={iRef} title="Welcome to" onClose={handleClose}>
      <main data-dark={darkTheme} style={textColors}>
        <section>
          <div className="content">
            <div className="headings">
              <h1>My personal</h1>
              <h2>OS Website</h2>

              <p>Windows and Icons are draggable 😜</p>
            </div>

            <div className="infobox" style={{ ...textColors, ...infobox }}>
              <div className="disk"></div>

              <div className="drivename">/sda/sda1</div>
              <div className="sizes">200 MB / 12GB Free</div>
            </div>
          </div>
        </section>
      </main>
    </DragableWindow>
  );
}

export default Welcome;
