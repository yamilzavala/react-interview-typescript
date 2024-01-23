import useTimerContext from '../hooks/useTimerContext';
import { Timer as TimerProps } from '../interfaces/interfaces';
import Container from "./UI/Container";
import { useEffect, useState, useRef } from 'react';


export default function Timer({name, duration}: TimerProps) {
  const intervalRef = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const {isRunning} = useTimerContext()!;

  if (remainingTime <= 0 && intervalRef.current) {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = window.setInterval(function() {
        setRemainingTime((prevTime) =>{
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        })
      }, 50);
      intervalRef.current = timer;
    } else if(intervalRef.current) {
      clearInterval(intervalRef.current)
    }  

    return () => clearInterval(timer)    
  }, [isRunning])

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress value={remainingTime} max={duration * 1000}/></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}
