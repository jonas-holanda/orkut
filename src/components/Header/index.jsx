import { Link } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import './index-responsive.css';

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen((open) => !open)

        const menuMobile = document.querySelectorAll('.header__menu-mobile div');
        menuMobile.forEach((div) => {
            div.classList.toggle('toggle')
        });   
    }

    
    return (
        <>
        <header className="header">
           <figure>
                <img className="logo" src="/images/orkut.svg" alt="Logotipo do Site Orkut"  />
           </figure>
           <nav className={`${isOpen ? "header__menu responsive" : "header__menu"}`}>
                <ul className="menu__left">
                    <li><Link to={'..'}> Início</Link></li>
                    <li><Link to={'..'}> Pull Requests</Link></li>
                    <li><Link to={'..'}> Issues</Link></li>
                    <li><Link to={'..'}> Marketplace</Link></li>
                    <li><Link to={'..'}> Explore</Link></li>
                </ul>
                <ul className="menu__right">
                    <li><Link to={'../login'}> Login</Link></li>
                    <li><Link to={'../cadastro'}> Cadastro</Link></li>
                    <li><Link to={'../sair'}> Sair</Link></li>
                    <li><input type="text" placeholder="Pesquisar no Login" name="search"/></li>
                </ul>
           </nav>
           <section className="header__menu-mobile" onClick={toogleMenu}>
                <div id="bar1"></div>
                <div id="bar2"></div>
                <div id="bar3"></div>
            </section>
        </header>
        </>
    )
}