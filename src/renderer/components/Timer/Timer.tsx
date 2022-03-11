import React, { useEffect } from 'react';

let interval: NodeJS.Timeout;

const TimerPause = () => {
  clearInterval(interval);
};

const TimerReset = () => {};

const CounterRender = ({
  hours,
  minutes,
  seconds,
}: ITimerProps): JSX.Element => {
  useEffect(() => {
    interval = setInterval(() => {
      if (seconds >= 0) {
      }
      if (seconds === 59) {
      }
      if (minutes === 59) {
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <p>
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <button type="button" onClick={TimerPause}>
        Pause
      </button>
      <button type="button" onClick={TimerReset}>
        Reset
      </button>
    </div>
  );
};

export default CounterRender;
