import React, { useRef, useState } from "react";
// custom hooks
import useTheme from "@hooks/useTheme";
import DragableWindow from "../DragableWindow";

function Notepad() {
  const { darkTheme } = useTheme();

  const [content, setContent] = useState("");

  const getWords =
    content.trim() === "" ? 0 : content.trim().split(/\s+/).length;
  const getLetters = content.length;

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <DragableWindow title="Notepad">
      <textarea style={styles.editor(darkTheme)} onChange={handleChange} />
      <div style={styles.statusbar(darkTheme)}>
      💬 Words: {getWords} | 🔤 Letters: {getLetters}
      </div>
    </DragableWindow>
  );
}

const styles = {
  editor: (darkTheme) => ({
    color: darkTheme ? "#fff" : "#000",
  }),

  statusbar: (darkTheme) => ({
    width: "100%",
    height: 30,
    fontSize: 12,
    display: "flex",
    opacity: 0.6,
    backgroundColor: darkTheme ? "rgba(0,0,0,0.97)" : "rgba(255,255,255,0.97)",
    color: darkTheme ? "#fff" : "#000",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
  }),
};

export default Notepad;
