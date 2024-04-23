import { useEffect, useState } from "react";
import "./App.css";
import playSvg from "./assets/play.svg";
import stopSvg from "./assets/stop.svg";
import resetSvg from "./assets/reset.svg";
import SessionBtn from "./components/SessionBtn";
import NavButtons from "./components/NavButtons";
import Timer from "./components/Timer";
import Alarm from "./audio/alarm-clock-short-6402.mp3"

function App() {

  const [sessionNumber, setSessionNumber] = useState(1);
  const [breakNumber, setBreakNumber] = useState(0);
  
  const [isRuning, setIsRuning] = useState(false);

  const [timerKey, setTimerKey] = useState(1);
  const [breakKey, setBreakKey] = useState(1);

  const [sessionStatus, setSessionStatus] = useState("session");


  useEffect(() => {
    setTimerKey((prevKey) => prevKey + 1);
  }, [sessionNumber]);

  useEffect(() => {
    setBreakKey((prevKey) => prevKey + 1);
  }, [breakNumber]);

  //list of buttons (pause play resume)

  const navBtnList = [
    {
      id: 1,
      imgSrc: stopSvg,
      onClickFunction: () => {
        setIsRuning(false);
      },
    },
    {
      id: 2,
      imgSrc: playSvg,
      onClickFunction: () => {
        setIsRuning(true);
      },
    },
    {
      id: 3,
      imgSrc: resetSvg,
      onClickFunction: () => {
        setIsRuning(false);
        setSessionNumber(0);
      },
    },
  ];

// Function that plays the audio once the timer ends
  const audioPlayFunction = () => {
    setIsRuning(false)
    const myAudio = new Audio(Alarm);
    myAudio.play();
    setTimeout(() => {
      myAudio.pause();
    }, 3000);
    setTimeout(() => {
      setSessionStatus(sessionStatus === "session" ? "" : "session")
    }, 5000);
  };



  return (
    <>
      <h1 id="title">{sessionStatus === "session" ? "Session Timer" : "Break Timer"}</h1>
      <main>
        <div className="headButtons">
          <SessionBtn
            name={"Session"}
            sessionNumber={sessionNumber}
            setNumber={setSessionNumber}
          />
          <SessionBtn
            name={"Break"}
            sessionNumber={breakNumber}
            setNumber={setBreakNumber}
          />
        </div>
        <div className="divider">
          <span className="middleDivider"></span>
        </div>

        <div className="timer">
          <Timer
            key={sessionStatus === "session" ? timerKey : breakKey}  
            isRuning={isRuning}
            initialTime={sessionStatus === "session" ? sessionNumber * 60 : breakNumber * 60}
            onComplete={audioPlayFunction}
          />
        </div>

        <div className="divider">
          <span className="middleDivider"></span>
        </div>
        <div className="controlerDiv">
          {navBtnList.map((item) => {
            return (
              <NavButtons
                key={item.id}
                src={item.imgSrc}
                onClickFunction={item.onClickFunction}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
