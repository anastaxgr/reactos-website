import React from "react";

function Certificate({ cert }) {
  return (
    <a href={cert.url} className="cert">
      <img src={cert.image} />
    </a>
  );
}

export default Certificate;
