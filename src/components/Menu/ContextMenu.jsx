import { useState, useEffect } from "react";
import { styles } from "./../../styles";
import useTheme from '@hooks/useTheme';
import ContextOption from '@compo/Menu/ContextOption';


const ContextMenu = ({options}) => {
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const { darkTheme } = useTheme()
  const style = {
 minWidth:200,
    position: "absolute",
    top: menuPosition.y,
    left: menuPosition.x,
    borderRadius:5,
    padding: "10px",
    listStyle: "none",
    overflow:'hidden',
    zIndex:999,
  };


  useEffect(() => {

    const handleContextMenu = (event) => {
      event.preventDefault();

      setMenuPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleClick = () => setVisible(false);

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", handleClick);
    };
  }, []);


  return (
    <>
      {visible && (
        <ul style={{ ...style, ...(darkTheme ? styles.dark : styles.light) }}>
         
         {options.map((option, index) => (
            <ContextOption key={index} options={options} option={option} />
          ))}

        </ul>
      )}
    </>
  );
};

export default ContextMenu;
