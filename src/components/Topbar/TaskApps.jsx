import React from "react";

import TaskApp from "./TaskApp";
export default function TaskApps() {


  const style = {
    width: 140,
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,20px)",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    gap:10,
    left: 50,
  };

  return (
    <div style={style}>
     <TaskApp app="terminal"/>
     <TaskApp app="music"/>
     <TaskApp app="music"/>
    </div>
  );
}
