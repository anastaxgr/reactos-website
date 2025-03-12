import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

// hooks
import usePosition from "@hooks/usePosition";
import useWindow from "@hooks/useWindow";

const DragIcon = ({ icon }) => {
  const nodeRef = useRef(null);
  const {open} = useWindow();

  // handle double click for mobiles
  const [lastTouchTime, setLastTouchTime] = useState(0);

  const [position, setPosition] = usePosition(icon, { x: 0, y: 0 }, nodeRef);

  const handleStop = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleOpen = () => {
    open(icon);

    if(icon == "resume") {
      window.open("/resume.pdf", '_blank').focus();


    }
  };

  const handleTouchStart = (e) => {
    const currentTime = Date.now();

    if (currentTime - lastTouchTime < 300) {
      handleOpen();
    }

    setLastTouchTime(currentTime);
  };

  return (
    <Draggable nodeRef={nodeRef} position={position} onStop={handleStop}>
      <div
        ref={nodeRef}
        className="iconbox"
        onDoubleClick={handleOpen}
        onTouchStartCapture={handleTouchStart}
      >
        <div className={`icon ${icon}`}></div>
        <div className="label">{icon}</div>
      </div>
    </Draggable>
  );
};

export default DragIcon;
