import React from 'react';

const btnOptions = [
    'first option',
    'second option',
    'third option'
] as const;

const ReadOnlyConst = () => {
    return (
        <div>
            <button>
                {btnOptions.map(option => option + '-')}
            </button>
        </div>
    );
};

export default ReadOnlyConst;