import React, { useRef } from "react";

import { certList } from "@certs";

// custom hooks
import useTheme from "@hooks/useTheme";
import useWindow from "@hooks/useWindow";

// components
import DragableWindow from "../DragableWindow";
import Certificate from "./../Certificate";

function CoursesWindow() {
  const { darkTheme } = useTheme();
  const iRef = useRef(null);
  const theme = darkTheme ? "light" : "dark";
  const { close, isOpen } = useWindow();

  const handleClose = () => {
    close("certificates");
  };

  if (!isOpen("certificates")) {
    return null;
  }


  return (
    <DragableWindow nodeRef={iRef} title="About Me" onClose={handleClose}>
      <main>
        <section>
          <div className="content">
            <div className="headings"></div>

            <div className="courses-list">
              {certList.map((cert) => {
                return <Certificate cert={cert} />;
              })}
            </div>
          </div>
        </section>
      </main>
    </DragableWindow>
  );
}

export default CoursesWindow;
