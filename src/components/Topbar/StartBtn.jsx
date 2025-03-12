import React from "react";

import useTheme from "@hooks/useTheme";

export default function StartBtn() {
  const { darkTheme } = useTheme();

  const style = {
    width: 70,
    height: 30,
    background: "#30BEE5",

    borderBottomRightRadius: 50,
    color: "#fff",
    fontSize: 18,
    fontWeight: 500,
    display: "flex",
    position: "absolute",
    justifyContent: "center",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    left: 0,
    top: 0,
  };

  return (
    <div style={style}>
     <span className="lnr lnr-home"></span>
    </div>
  );
}
