import Button from "./UI/Button";
import useTimerContext from '../hooks/useTimerContext'

export default function Header() {
  const {stopTimers, startTimers, isRunning} = useTimerContext()!;

  const handleTimers = () => {
    isRunning ? stopTimers() : startTimers();
  }

  return (
    <header>
      <h1>ReactTimer</h1>

      <Button onClick={handleTimers}>{isRunning ? 'Stop' : 'Start'} Timers</Button>
    </header>
  );
}
