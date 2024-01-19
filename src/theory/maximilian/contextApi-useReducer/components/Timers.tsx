import useTimerContext from '../hooks/useTimerContext'
import Timer from './Timer';

export default function Timers() {
  const {timers} = useTimerContext()!;

  const timersRendered = timers.map((timer,idx) => (
    <li key={idx}>
      <Timer {...timer} />
    </li>
  ))

  return <ul>{timersRendered}</ul>;
}
