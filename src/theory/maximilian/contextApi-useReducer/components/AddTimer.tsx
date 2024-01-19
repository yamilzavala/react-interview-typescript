import { useRef } from 'react';
import Form, { FormHandle } from './UI/Form';
import Input from './UI/Input';
import Button from './UI/Button';
import useTimerContext from '../hooks/useTimerContext'

export default function AddTimer() {
  const form = useRef<FormHandle>(null);
  const {addTimer} = useTimerContext()!;

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };

    addTimer({
      name: extractedData.name,
      duration: +extractedData.duration
    })
    console.log(extractedData);
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
