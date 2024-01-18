import React from 'react';

type TImg = {
    src: string,
    alt: string
}

type THeaderProps = React.PropsWithChildren & {
    image: TImg    
}

const Header: React.FC<THeaderProps> = ({image, children}) => {
    return (
        <>
          <header>
            <img {...image} />
            {children}
          </header>  
        </>
    );
};

export default Header;