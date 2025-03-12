import React, { useRef } from "react";

// custom hooks
import useTheme from "@hooks/useTheme";
import useWindow from "@hooks/useWindow";

// components
import DragableWindow from "../DragableWindow";
import AppIcon from "../AppIcon";

function AppsWindow() {
  const { darkTheme } = useTheme();

  const iRef = useRef(null);
  const theme = darkTheme ? "light" : "dark";


  const {isOpen,close} = useWindow()

  if(!isOpen("apps")) {
    return null;
  }
  return (
    <DragableWindow nodeRef={iRef} title="Apps" onClose={()=>close("apps")}>
      <main data-dark={darkTheme}>
        <section>
          <div className="apps">
            <AppIcon icon="terminal" />
            <AppIcon icon="music" />
            <AppIcon icon="web" />
            <AppIcon icon="hashme" />
          </div>
        </section>
      </main>
    </DragableWindow>
  );
}

export default AppsWindow;
