import React from 'react';
import fetchUsers from './lib/fetchUsers';
import Form from './components/Form';

fetchUsers()

const AppZodTs = () => {

    return (
        <div>
            <Form/>
        </div>
    );
};

export default AppZodTs;