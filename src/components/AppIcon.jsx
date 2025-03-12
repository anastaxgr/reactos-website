import React from "react";


function AppIcon({ icon}) {

  return (
    <div className="iconbox">
      <div className="app" data-icon={icon}></div>
      <div className="lbl">{icon}</div>
    </div>
  );
}

export default AppIcon;
