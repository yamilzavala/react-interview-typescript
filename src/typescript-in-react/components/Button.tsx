import React, { Component } from 'react';

type colorsOptions = 'red' | 'green' | 'blue';

interface Color { color: 'red' | 'green' | 'blue'};

type TURL = string; 

const url: TURL = 'http://www.google.com'

type ButtonProps1 = {
    style?: {
        bgColor: colorsOptions,
        fontSize: number,
        padding: [number, number, number, number]
    }
}

type ButtonProps2 = {
    styleProps: React.CSSProperties
}

type ButtonProps3 = {
    borderRadius: Record<string, number>
    // borderRadius: {
    //     left: number;
    //     top: number;
    //     right: number;
    //     bottom: number;
    // },
}

type ButtonProps4 = {
    onClick:(value: string) => number,
    children: React.ReactNode,
    setCount?:  React.Dispatch<React.SetStateAction<number>>
}

type ButtonProps5 = {
    children: JSX.Element
}

type TBtnProps2 = {
    type: 'submit' | 'reset' | 'button',
    autoFocus?: boolean
}

type TVariantBtn = 'primary' | 'secondary';

type TBtnProps3 = React.ComponentPropsWithRef<'button'> & {
    variant?: TVariantBtn
};

type TImgProps = React.ComponentProps<'img'>;

type TBtn = React.ComponentPropsWithRef<'button'> & {
    type: 'submit' | 'reset' | 'button',
    color: 'blue' | 'yellow'
}

type TSuperBtn = TBtn & {
    size: 'md' | 'lg' 
}

interface IBtnProps extends React.ComponentPropsWithRef<'button'> {
    type: 'submit' | 'reset' | 'button',
    color: 'blue' | 'yellow'
}

interface ISuperBtn extends IBtnProps {
    size: 'md' | 'lg' 
}

 const Button = ({type, color, ...res}:TSuperBtn) => {

    const someFn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log('clicked')
    }

    return (
        <>          
            <button onClick={someFn} type={type} color={color} {...res}>some text</button>            
        </>
    );
};

export default Button;