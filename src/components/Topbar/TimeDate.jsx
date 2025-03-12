import React, { useState } from "react";

//custom hooks
import useLocalTime from "@hooks/useLocalTime";
import useTheme from "@hooks/useTheme";

export default function TimeDate() {
  const { localtime } = useLocalTime();
  const { darkTheme } = useTheme();

  const style = {
    backgroundColor: "transparent",
    color: darkTheme ? "#fff" : "#000",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    fontWeight: 400,
    fontSize: 15,
    right:10,
  };

  return (
    <>
      <div style={style}>{localtime} 📆</div>
    </>
  );
}
