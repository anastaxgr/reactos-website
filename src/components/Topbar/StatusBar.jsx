import React from "react";
//custom hooks
import useTheme from "@hooks/useTheme";

//components
import StartBtn from "./StartBtn";
import TaskApps from "./TaskApps";
import TimeDate from "./TimeDate";

export default function StatusBar() {
  const { darkTheme } = useTheme();

  const bgDark = "rgba( 255, 255, 255, 0 )";
  const bgLight = "rgba(255, 255, 255, 0.95)";

  const style = {
    backdropFilter: "blur(17.2px)",
    WebkitBackdropFilter: "blur(17.2px)",
    background: darkTheme ? bgDark : bgLight,
  };

  return (
    <div className="statusbar" style={style}>
      <StartBtn />
      <TaskApps/>
      <TimeDate />
    </div>
  );
}
