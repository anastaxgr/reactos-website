import { useState, useEffect } from "react";

const usePosition = (key, initialValue) => {
  const [position, setPosition] = useState(() => {
    const savedPosition = localStorage.getItem(key);
    return savedPosition ? JSON.parse(savedPosition) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(position));
  }, [key, position]);

  return [position, setPosition];
};

export default usePosition;
