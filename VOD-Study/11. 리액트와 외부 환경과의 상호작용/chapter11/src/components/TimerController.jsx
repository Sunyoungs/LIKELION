import { useState, useEffect, useRef } from "react";

const INIT_TIME = 3;

const TimerController = () => {
  const intervalID = useRef();
  const [time, setTime] = useState(INIT_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (time === 0) {
      console.log("타이머를 멈춰주세요!");
      clearInterval(intervalID.current);
      setTime(INIT_TIME);
      setIsRunning(false);
    }
  }, [time]);

  return (
    <div>
      <div className="timerDisplay">
        <span className="value">{time}</span>
        <span className="unit">초</span>
      </div>
      <div className="timerButton">
        { isRunning ? (
          <button onClick={() => {
            setIsRunning(false);
            clearInterval(intervalID.current);
          }}>일시정지</button>
        ) : (
          <button className="startButton" onClick={() => {
            intervalID.current = setInterval(() => {
              setTime((prevTime) => prevTime-1);
            }, 1000);
            setIsRunning(true);
          }}>시작</button>
        )}
      </div>
    </div>
  )
};

export default TimerController;