import { useEffect, useState } from "react";
import "./App.css";
import ControlButton from "./ControlButton";
import Timer from "./Timer";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };
  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  return (
    <div className="stopwatch">
      <div className="stopwatch_box">
        <h4>Stop Watch</h4>
        <Timer time={time} />
        <ControlButton
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
