import { Timer as TimerProps } from '../interfaces/interfaces';
import Container from "./UI/Container";


export default function Timer({name, duration}: TimerProps) {
  
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>{duration}</p>
    </Container>
  );
}
