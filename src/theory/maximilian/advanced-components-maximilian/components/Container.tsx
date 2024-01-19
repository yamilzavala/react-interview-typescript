//Polimorfic component
import React, { ComponentPropsWithoutRef, ElementType } from 'react';

type TContainerProps <T extends ElementType> = {
    as?: T,
    children: React.ReactNode
} & ComponentPropsWithoutRef<T>

const Container = <T extends ElementType>({as, children, ...props}: TContainerProps<T>) => {
    const Component = as || 'div';

    return <Component {...props}>{children}</Component>
};

export default Container;