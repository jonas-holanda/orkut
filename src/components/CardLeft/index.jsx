import './index.css';
import './index-responsive.css';

export default function CardLeft() {
    return (
        <>
        <section className="card-left">
            <figure>
                <img src="/images/code1.svg" alt="Figura de um Homem Programando"/>
            </figure>
            <div className="card-left__phrases">
                <p><span>Siga</span> amigos e outros devs do seu interesse usando o botão seguir </p>
                <p><span>Conheça</span> novos devs e repositórios através da aba explorar</p>
                <p><span>Compartilhe</span> ideias e soluções em um só lugar</p>
            </div>
        </section>
        </>
    );
}