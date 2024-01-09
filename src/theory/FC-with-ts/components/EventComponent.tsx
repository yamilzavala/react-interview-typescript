import React from 'react';

const EventComponent: React.FC = () => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <input onChange={handleChange}/>
        </div>
    );
};

export default EventComponent;