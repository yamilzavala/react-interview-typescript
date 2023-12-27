import React, {useRef, useState} from 'react';

type User = {
    name: string,
    age: number
}

type Guest = Omit<User, 'name'> & {
    address: string
} 

const User = () => {
    const [user, setUser] = useState<Guest | null>(null)
    
    const refBtn = useRef<HTMLButtonElement>(null)

    return (
        <div>
            {user?.address} - {user?.age}
            <button ref={refBtn}>Click me</button>
        </div>
    );
};

export default User;