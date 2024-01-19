import React, {useRef, useEffect} from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import Form, { TRefProps } from './components/Form';

const AppAdvancedComponents = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const formRef = useRef<TRefProps>(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[])

    const handleOnSave = (data: unknown) => {
        const extractedData = data as {name: string, age: string}
        console.log(extractedData)
        formRef.current?.clear()
    }

    return (
        // <main>
        //     <Input label='Name' id='name' type='text' ref={inputRef}/>
        //     <Input label='Age' id='age' type='number'/>
        //     <p>
        //         <Button el='anchor' href='http://www.google.com'>Link</Button>
        //     </p>
        //     <p>
        //         <Button el='button'> some btn</Button>
        //     </p>
        //     <Container as={Button} el='anchor' href='http://www.google.com'>Click me</Container>
        // </main>

        <Form onSave={handleOnSave} ref={formRef}>
            <Input label='Name' id='name'/>
            <Input label='Age' id='age' type='number'/>
            <Button el='button'>Save</Button>
        </Form>
    );
};

export default AppAdvancedComponents;