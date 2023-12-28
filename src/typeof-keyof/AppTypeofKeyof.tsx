import React from 'react';

type TTOFPerson = typeof person;
type TKEYOFPerson = keyof typeof person;

const person = {
    name: 'John',
    age: 35
}

const getProperty = (obj: TTOFPerson, key: TKEYOFPerson) => {
    return obj[key]
}

const AppTypeofKeyof = () => {
    const property = getProperty(person, 'name')

    return (
        <div>
            property: {property}
        </div>
    );
};

export default AppTypeofKeyof;