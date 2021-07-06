import React from 'react';
import './Button.css';

const Button = ({theme, clickEvent, placeholder}: {theme: string; clickEvent: () => void; placeholder: string}) => {
    return (
        <button className={`button ${theme}`} onClick={clickEvent}>{placeholder}</button>
    )
}

export default Button;