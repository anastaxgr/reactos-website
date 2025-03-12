import React from "react";


function FileIcon({ icon,txt}) {

  return (
    <div className="iconbox">
      <div className="file" data-icon={icon}></div>
      <div className="lbl">{txt}</div>
    </div>
  );
}

export default FileIcon;
