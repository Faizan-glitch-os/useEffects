import { useState, useEffect } from "react";

export default function Progress({ time }) {
  const [remainingTime, setRemainingTime] = useState(time);

  useEffect(() => {
    const timeRemain = setInterval(() => {
      console.log("time expiring");
      setRemainingTime((previousTime) => previousTime - 10);
    }, 10);

    return () => {
      clearInterval(timeRemain);
    };
  }, []);

  return <progress value={remainingTime} max={time} />;
}
