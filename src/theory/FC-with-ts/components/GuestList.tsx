import React, {useState} from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [guests, setGuest] = useState<string[]>([])

    const handleAddGuest = () => {
        const currentList = [...guests, name]
        setGuest(currentList)
        setName('')
    }

    const renderedNames = guests.map((guest,idx) => (
        <li key={idx}>{guest}</li>
    ))

     return (
        <div>
            <h3>Gust List</h3>

            <ul>
                {renderedNames}
            </ul>
            
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAddGuest}>Add guest</button>
        </div>
    );
};

export default GuestList;