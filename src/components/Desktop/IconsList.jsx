import React from "react";
//components
import DragIcon from "@compo/Desktop/DragIcon";


export default function IconsList() {
  const style = {
    width: 60,
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    zIndex: 99,
    gap: 30,
    top: 70,
    left: '2%'
  };
  return (
    <div style={style}>
      <DragIcon icon="profile"/>
 
      <DragIcon icon="apps" />
      <DragIcon icon="portfolio"/>
      <DragIcon icon="certificates"  />
      <DragIcon icon="resume" />
    </div>
  );
}
