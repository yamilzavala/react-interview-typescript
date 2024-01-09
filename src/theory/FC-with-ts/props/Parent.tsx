import React from 'react';
import Child from './Child';

const Parent = () => {
    return (
        <div>
            <Child age={28} name='yamil' onClickFc={() => console.log('Clicked')}>some text</Child>
        </div>
    );
};

export default Parent;