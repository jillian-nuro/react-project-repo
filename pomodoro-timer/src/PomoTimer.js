import React, { useState, useEffect } from "react";
import "./PomoTimer.css";

const PomoTimer = () => {
  // set state
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);
  const [displayMessage, setDisplayMessage] = useState(false);

  // update timer display every second
  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  // formatting minutes and seconds to two digits
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {!displayMessage && <div>Break in:</div>}
        {displayMessage && <div>Next session starts in:</div>}
      </div>
      <div className="timer">
        {timerMinutes}:{timerSeconds}
      </div>
      <button>Start</button>
      <button>Pause</button>
      <button>Clear</button>
    </div>
  );
};

export default PomoTimer;
