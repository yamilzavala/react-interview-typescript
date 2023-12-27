import React, {useEffect} from 'react';

type ButtonColor = 'black' | 'white';

const UseEffectType = () => {

    useEffect(() => {
        const previousBtnColor = localStorage.getItem('buttonColor') as ButtonColor;
    },[])

    return (
        <div>
            <button>click me</button>
        </div>
    );
};

export default UseEffectType;