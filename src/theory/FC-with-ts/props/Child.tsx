import React from 'react';

interface IChildProps {
    name: string,
    age: number,
    children: React.ReactNode,
    onClickFc: () => void
}

const Child = ({name, age, children, onClickFc}: IChildProps) => {
    return (
        <div>
            I`m Child component
            {name} - {age}
            <span>{children}</span>
            <button onClick={onClickFc}>Click me</button>
        </div>
    );
};

export const ChildFC: React.FC<IChildProps> = ({name, age, children}) => {
    return (
        <div>
            {name} - {age}
            <span>{children}</span>
        </div>
        
    )
}

export default Child;