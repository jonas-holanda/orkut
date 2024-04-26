import './index.css';
import './index-responsive.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <>
            <section className="notFound">
                <div className="notFound__main">
                    <div className="main__message">
                        <h1>404</h1>
                        <h2>PÁGINA NÃO ENCONTRADA</h2>
                    </div>
                    <div className="main__gif"><img src="/images/tenor.gif" /></div>
                </div>
                <Link to="../login">Voltar para o Login</Link>
            </section>
        </>
    );
}