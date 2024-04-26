import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './index.css';

export default function Footer() {

    useEffect(() => {
        document.querySelector('#date').innerText = (new Date().getFullYear());
    },[]);

    return (
        <>
        <footer className="footer">
            <ul>
                <li>&copy; <span id="date"></span> Login</li>
                <li><Link to={'../not-found'}>Sobre o Login</Link></li>
                <li><Link to={'../not-found'}>Centro de segurança</Link></li>
                <li><Link to={'../not-found'}>Privacidade</Link></li>
                <li><Link to={'../not-found'}>Termos</Link></li>
                <li><Link to={'../not-found'}>Contato</Link></li>
            </ul>
            
        </footer>
        </>
    );
}