import React, { ComponentPropsWithRef } from 'react';

type TInputProps = {
    label: string,
    id: string;
} & React.ComponentPropsWithoutRef<'input'>

const Input = ({id, label, ...props}: TInputProps) => {
    return (
        <p>
           <label htmlFor={id}>{label}</label> 
           <input id={id} {...props} />
        </p>
    );
};

export default Input;