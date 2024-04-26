import Header from '../../components/Header';
import './index.css'; 
import './index-responsive.css'; 

export default function Home() {
    return (
        <>
        <Header/>
        <section className="container">
            <aside className="container__left-menu">
                <div className="left-menu__profile-image">
                    <img src="https://avatars.githubusercontent.com/u/138180385" alt="Imagem de Perfil"/>
                </div>
                <span className="left-menu__separator"></span>
                <div className="left-menu__ocuppation">
                    <h3>Jonas Holanda</h3>
                    <span>Web Developer</span>
                </div>
                <span className="left-menu__separator"></span>
                <div className="left-menu__links">
                    <ul>
                        <li><img src="/images/building.png" alt="Organização"/><a href="https://www.instagram.com/_jonasholanda/" target="_blank">@_jonasholanda</a></li>
                        <li><img src="/images/pin.png" alt="Localização"/><a href="#">Sobral-Ce</a></li>
                        <li><img src="/images/email.png" alt="Email"/><a href="mailto:jonasholanda15@gmail.com">jonasholanda15@gmail.com</a></li>
                        <li><img src="/images/url.png" alt="Site"/><a href="https://github.com/jonas-holanda" target="_blank">https://github.com/jonas-holanda</a></li>
                        <li><img src="/images/3225191_app_instagram_logo_media_popular_icon.svg" alt="Instagram"/><a href="https://www.instagram.com/_jonasholanda/" target="_blank">@_jonasholanda</a></li>
                    </ul>
                </div>
                <span className="left-menu__separator"></span>
                <div className="left-menu__orgs">
                    <h3>Organizações</h3>
                    <ul>
                        <li><img src="/images/potencia.png" alt="Potência Tech Ifood"/><a href="https://potenciatech.com.br/" target="_blank">Potência tech</a></li>
                        <li><img src="/images/dio.jpg" alt="DIO"/><a href="https://www.dio.me/" target="_blank">DIO</a></li>
                    </ul>
                </div>
            </aside>
            <main className="container__main">
                <section className="main__header">
                    <h1>Bem-vindo(a), Jonas Holanda</h1>
                    <p><strong>Sorte de hoje:</strong> Aquele que trabalha duro pode superar um gênio,mas,de nada adianta trabalhar duro se você não confia em você mesmo.</p>
                    <ul>
                        <li><span>Repositórios</span>
                            <span><img src="/images/repos.png" alt="Reposítórios"/>64</span>
                        </li>
                        <li><span>Favoritos</span>
                            <span><img src="/images/stars.png" alt="Favoritos"/>1.4k</span>
                        </li>
                        <li><span>Seguidores</span>
                            <span><img src="/images/followers.png" alt="Seguidores"/>1.1k</span>
                        </li>
                        <li><span>Seguindo</span>
                            <span><img src="/images/binoculars.png" alt="Seguindo"/>216</span>
                        </li>
                    </ul>
                </section>
                <section className="main__options">
                    <h2 className="options__title">O que você deseja fazer?</h2>
                    <ul className="options__list">
                        <li><button>Criar repositório</button></li>
                        <li><button>Importar Repositório</button></li>
                        <li><button>Novo Gist</button></li>
                        <li><button>Nova Organização</button></li>
                        <li><button>Novo Proj</button></li>
                    </ul> 
                </section>
                <section className="main__last-repos">
                    <h2 className="last-repos__title">Meus últimos repositórios:</h2>
                    <ul className="last-repos__list">
                        <li>
                            <div className="list__details">
                                <span><img src="/images/repos.png" alt="Reposítório"/><a href="https://github.com/jonas-holanda/stardev-academy" target="_blank">jonas-holanda/stardev-academy</a></span>
                                <span> Landing page campeã do Desafio Landing Page, onde o primeiro lugar foi escolhido pela Avanade empresa parceira do projeto Impulso Digital.</span>
                            </div>
                            <div className="list__btn">
                                <button><img src="/images/stars.png" alt="Favoritar"/> Star</button>
                            </div>
                        </li>
                        <span className="list__separator"></span>
                        <li>
                            <div className="list__details">
                                <span><img src="/images/repos.png" alt="Reposítório"/><a href="https://github.com/jonas-holanda/gestor-de-tarefas-laravel" target="_blank">jonas-holanda/gestor-de-tarefas-laravel</a></span>
                                <span>Gestor de Tarefas criado no curso de Desenvolvimento Web da Udemy.</span>
                            </div>
                            <div className="list__btn">
                                <button><img src="/images/stars.png" alt="Favoritar"/> Star</button>
                            </div>
                        </li>
                        <span className="list__separator"></span>
                        <li>
                            <div className="list__details">
                                <span><img src="/images/repos.png" alt="Reposítório"/><a href="https://github.com/jonas-holanda/wikipedia2.0" target="_blank">jonas-holanda/wikipedia2.0</a></span>
                                <span>Criando um Wikipédia, utilizando a semântica do HTML para acessibilidade.</span>
                            </div>
                            <div className="list__btn">
                                <button><img src="/images/stars.png" alt="Favoritar"/> Star</button>    
                            </div>
                        </li>
                        <span className="list__separator"></span>
                        <li>
                            <div className="list__details">
                                <span><img src="/images/repos.png" alt="Reposítório"/><a href="https://github.com/jonas-holanda/api-laravel" target="_blank">jonas-holanda/api-laravel</a></span>
                                <span>Uma API criada utilizando a framework Laravel.</span>
                            </div>
                            <div className="list__btn">
                                <button><img src="/images/stars.png" alt="Favoritar"/> Star</button>   
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
            <aside className="container__right-menu">
                <section className="right-menu__following">
                    <div className="following__header">
                        <h4>Seguindo</h4><span>(216)</span>
                    </div>
                    <div className="following__profiles">
                        <div className="profiles__card">    
                            <a href="https://github.com/jonas-holanda" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/138180385" alt="Foto de Perfil de Jonas Holanda"/> 
                                <span>Jonas Holanda</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="https://github.com/daniziognr17" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/61030881?v=4" alt="Foto de Perfil de Luiz Danizio"/> 
                                <span>Luiz Danizio</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="https://github.com/RenatoGFreire" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/44921788?v=4" alt="Foto de Perfil de Renato Freire"/> 
                                <span>Renato Freire</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="https://github.com/natanaelfreire" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/61666036?v=4" alt="Foto de Perfil de Natanael Freire"/> 
                                <span>Natanael Freire</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="#">
                                <img src="/images/pexels-tyhuynh99-3153040.jpg" alt="Imagem de Exemplo"/> 
                                <span>Himari Silva *exemplo</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="#">
                                <img src="/images/pexels-elsimage-2997544.jpg" alt="Imagem de Exemplo"/> 
                                <span>Emma Sousa *exemplo</span>
                            </a>
                        </div>
                    </div>
                    <span className="following__separator"></span>
                    <div className="following__footer">
                        <a href="#">Ver todos</a>
                    </div>
                </section>
                <section className="right-menu__followers">
                <div className="followers__header">
                        <h4>Seguidores</h4><span>(1.1k)</span>
                    </div>
                    <div className="followers__profiles">
                    <div className="profiles__card">    
                            <a href="https://github.com/jonas-holanda" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/138180385" alt="Foto de Perfil de Jonas Holanda"/> 
                                <span>Jonas Holanda</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="https://github.com/daniziognr17" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/61030881?v=4" alt="Foto de Perfil de Luiz Danizio"/> 
                                <span>Luiz Danizio</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="https://github.com/RenatoGFreire" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/44921788?v=4" alt="Foto de Perfil de Renato Freire"/> 
                                <span>Renato Freire</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="https://github.com/natanaelfreire" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/61666036?v=4" alt="Foto de Perfil de Natanael Freire"/> 
                                <span>Natanael Freire</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="#">
                                <img src="/images/pexels-tyhuynh99-3153040.jpg" alt="Imagem de Exemplo"/> 
                                <span>Himari Silva *exemplo</span>
                            </a>
                        </div>
                        <div className="profiles__card">    
                            <a href="#">
                                <img src="/images/pexels-elsimage-2997544.jpg" alt="Imagem de Exemplo"/> 
                                <span>Emma Sousa *exemplo</span>
                            </a>
                        </div>
                    </div>
                    <span className="followers__separator"></span>
                    <div className="followers__footer">
                        <a href="#">Ver todos</a>
                    </div>
                </section>
            </aside>
        </section>
        </>
    );
}