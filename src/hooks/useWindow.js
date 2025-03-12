// useWindow.js
import { useDispatch, useSelector } from "react-redux";
import { openWindow, closeWindow } from "@reducers/windowSlice";  


const useWindow = () => {
  const dispatch = useDispatch();
  const windows = useSelector((state) => state.windows);

  const open = (windowName) => {
    dispatch(openWindow(windowName));
  };

  const close = (windowName) => {
    dispatch(closeWindow(windowName)); 
  };

  const isOpen = (windowName) => {
    return windows[windowName];  
  };

  return {
    open,
    close,
    isOpen,
  };
};

export default useWindow;
