import React, { useState, useRef } from "react";

const CountTime = () => {
  const [time, setTime] = useState(0);
  const [millis, setMillis] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    setIsRunning(true);
    let startTime = Date.now();
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      setTime(Math.floor(elapsedTime / 1000));
      setMillis(elapsedTime % 1000);
    }, 1);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setTime(0);
    setMillis(0);
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  return (
    <div>
      <h2>Đếm thời gian</h2>
      <p>
        Thời gian: {time} giây {millis} mili giây
      </p>
      <div>
        {!isRunning ? (
          <button onClick={startTimer}>Bắt đầu</button>
        ) : (
          <button onClick={stopTimer}>Dừng</button>
        )}
        <button onClick={resetTimer}>Đặt lại</button>
      </div>
    </div>
  );
};

export default CountTime;
