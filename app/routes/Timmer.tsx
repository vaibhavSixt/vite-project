import { useRef, useState } from "react";
import Time from 'app/components/Time'
export default function Timmer() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalId = useRef<NodeJS.Timer | null>(null);
    const startStopTimer = ()=> {
        
        if (!isRunning) {
            intervalId.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            
        }else{
            if (intervalId.current) {
                clearInterval(intervalId.current);
                intervalId.current = null;
            }
        }
        setIsRunning(!isRunning);
       
    }
    const resetTimmer = ()=>{
        setTime(0);
        setIsRunning(false);
        if (intervalId.current) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    }
    const code=time/60;
    const code1 = time%60;
  return (
    <div className="flex flex-col items-center justify-center h-screen timer" style={{
        'background': `linear-gradient(to bottom, rgb(208, 108, 179) ${code}%, rgb(95, 160, 141) 50%)`
    }}>
      <h1 className="text-7xl font-bold mb-10">TIMER</h1>
      <Time time={time} />
      <div><button className={!isRunning?"start-button":'stop-button'}onClick={startStopTimer}>{isRunning?"Stop":"Start"}</button> <button onClick={resetTimmer} disabled = {!isRunning} className="reset-button">Reset</button></div>
    </div>
  );
}