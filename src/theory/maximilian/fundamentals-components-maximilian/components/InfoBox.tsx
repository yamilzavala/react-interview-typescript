import React from 'react';

type THint = {
    mode: 'hint',
    children: React.ReactNode,
}
type TWarning = {
    mode: 'warning',
    children: React.ReactNode,
    severity: 'medium' | 'high' | 'low';
}

type TInfoBoxProps = THint | TWarning;

const InfoBox = (props: TInfoBoxProps) => {
    const {children, mode} = props;
    
    if (mode === 'hint') {
        return (
            <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
        )
    }

    const {severity} = props;

    return (
        <aside className={`infobox infobox-warning warning--${severity}`} >
            <h1>Warning</h1>
            <p>{children}</p>
        </aside>
    );
};

export default InfoBox;