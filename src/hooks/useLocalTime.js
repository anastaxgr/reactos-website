import { useState, useEffect } from "react";

const useLocalTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString();
  };

  const localtime = formatTime(time);

  return { localtime };
};

export default useLocalTime;
