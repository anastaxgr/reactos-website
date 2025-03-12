import React from "react";

// custom hooks
import useTheme from "@hooks/useTheme";

function ContextOption({ index, options, option }) {
  const { darkTheme } = useTheme();


  const brLight = "solid 1px rgba(0,0,0,0.1)"
  const brDark  = "solid 1px rgba(255,255,255,0.1)"


  return (
    <li
      key={index}
      onClick={() => option.action()}
      style={{
        padding: "8px 12px",
        cursor: "pointer",
        borderBottom:
          index !== options.length - 1
            ? darkTheme ? brDark : brLight
            : "none",
      }}
    >
      {option.label}
    </li>
  );
}

export default ContextOption;
