import { useState, useEffect } from "react";

const CountdownTimer = ({ isRuning, initialTime, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (isRuning) {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => {
          setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => {
          clearTimeout(timerId);
        };
      } else {
        onComplete();
      }
    }
  }, [initialTime, timeLeft, onComplete, isRuning]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      <p className="timerDisplay">
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </p>
    </div>
  );
};

export default CountdownTimer;
