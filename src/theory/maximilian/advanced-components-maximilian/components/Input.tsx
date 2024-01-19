import React, { ComponentPropsWithoutRef, forwardRef } from 'react';

type TInputProps = {
    label: string,
    id: string;
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, TInputProps>(function Input ({id, label, ...props}, ref) {
    return (
        <p>
           <label htmlFor={id}>{label}</label> 
           <input id={id} {...props} ref={ref} name={id} />
        </p>
    );
});

export default Input;