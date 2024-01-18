import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

const AppAdvancedComponents = () => {
    return (
        <main>
            <Input label='Name' id='name' type='text'/>
            <Input label='Age' id='age' type='number'/>

            <p>
                <Button el='anchor' href='http://www.google.com'>Link</Button>
            </p>
            <p>
                <Button el='button'> some btn</Button>
            </p>
        </main>
    );
};

export default AppAdvancedComponents;