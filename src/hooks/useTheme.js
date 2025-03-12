import { useSelector, useDispatch } from "react-redux";
import {
  toggleDarkTheme,
  setBackground,
} from "@reducers/themeSlice";

const useTheme = () => {
  const dispatch = useDispatch();
  const themeSettings = useSelector((state) => state.theme);

  return {
    ...themeSettings,
    toggleDarkTheme: (value) => dispatch(toggleDarkTheme(value)),
    setBackground: (color) => dispatch(setBackground(color)),
  };
};

export default useTheme;
