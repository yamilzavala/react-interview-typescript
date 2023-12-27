import React, {useEffect} from 'react';

type TTodo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const Fetch = () => {

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(resp => resp.json())
            .then((data: TTodo) => console.log(data.completed))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Fetch;