import React, {useState} from 'react';
import './Theme.css';

type TTheme =  'dark' | 'light' | 'system';

type TThemeListProps<T> = {
    themeOptions: T[],
    selectedTheme: T,
    setTheme: (theme: T) => void
}


const Themes = () => {
    const [selectedTheme, setTheme] = useState('light')
    const themeOptions = ['dark', 'light', 'system'];

    return (
        <div>
            <h1>Themes</h1>

            <ThemeList themeOptions={themeOptions} setTheme={(theme) => setTheme(theme)} selectedTheme={selectedTheme}/>
            Selected theme: {selectedTheme}
        </div>
    );
};

const ThemeList = <T,>({themeOptions, setTheme, selectedTheme}: TThemeListProps<T>) => {
    const renderedOptions = themeOptions.map((option: T, key: number) => (
        <li key={key} className={option === selectedTheme ? 'font-bold' : ''}>
            <button onClick={() => setTheme(option)}>
                {option as string}
            </button>
        </li>
    ))

    return (
        <ul>
            {renderedOptions}
        </ul>
    )
}

export default Themes;