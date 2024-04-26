import { useState } from 'react';
import './index.css';

export default function Input({type, information}) {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);    
    } 

    return (
        <>
            <input className="input__style" type={type} placeholder={information} value={value} onChange={handleChange} autoComplete={`${type == "password" ? "true" : "false"}`} required/> 
        </>
    );
}