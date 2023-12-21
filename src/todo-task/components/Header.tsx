import React from 'react';

interface Props {
    title: string;
}

const Header = ({title}: Props) => {
    return (
        <nav className='navbar navbar-dark bg-primary'>
                <div className='container'>
                    <a href="/" className='navbar-brand'>
                        {title}
                    </a>
                </div>
        </nav>
    );
};

export default Header;