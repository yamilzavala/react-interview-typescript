import React, { ComponentPropsWithoutRef } from 'react';

type TBtnProps = {
    el: 'button'
} & ComponentPropsWithoutRef<'button'>
type TLinkProps = {
    el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

type TButtonProps = TBtnProps | TLinkProps;

const Button = (props: TButtonProps) => {

    if (props.el === 'anchor') {        
        return <a className='button' {...props}> {props.children} </a>                
    }
 
    return <button className='button' {...props}> {props.children} </button>
   
};

export default Button;