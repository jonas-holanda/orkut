import { Link } from 'react-router-dom';
import './index.css';
import './index-responsive.css';

export default function CardRight({title, children, login=false}) {
    return (
        <>
        <section className="card-right">
            <div className="card-right__title">
                <h3>Acesse o <strong>login</strong></h3>
                <h3>{title}</h3>
            </div>
            <div className="card-right__form">
                <form action="">
                    {children}
                    {login ? <Link to={'../login'}>esqueceu a senha?</Link> : ''} 
                    <button type="submit">{login ? 'Entrar' : 'Cadastre-se'}</button>
                </form>
                <div className="form__link">
                    {login ? <span>Não tem uma conta? <Link to={'../cadastro'}>Cadastre-se</Link></span> : <span>Tem uma conta? <Link to={'../login'}>Conecte-se</Link></span>}
                </div>
            </div>
        </section>
        </>
    );
}