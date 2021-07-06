import React from 'react'
import "./Input.css";

const Input = ({theme, type, placeholder}: {theme: string; type: string; placeholder: string}) => {
    return (
        <input className={`input ${theme}`} type={type} placeholder={placeholder}></input>
    )
}

export default Input;