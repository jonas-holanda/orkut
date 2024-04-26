<div align="center">

# (Orkut) Desafio Autodidata - Potência Tech

</div>

[demo.webm](https://github.com/jonas-holanda/orkut/assets/138180385/2fe86601-e529-4146-b5ae-962d97ba1ffd)


**A Potência Tech lançou para a comunidade de alumni, desafios tech que variavam de acordo com a stack.**

**Eram três desafios, um para cada área. Havia um para o Front-end, um para o Back-end e um para Devops.**

**O desafio do front-end era a criação de um web app baseado no Orkut. Já para o back-end era a criação de uma API de autenticação. E por fim, para devops era solicitado  a criação de pipelines de CI/CD para deploy. Todos os três desafios teriam que ter o deploy.**

**Optei por fazer o desafio do Front-end por achar muito interessante as telas, e para aprimorar mais minhas habilidades.**

# Tecnologias Utilizadas

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) ![figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

</div>

# O Processo de Desenvolvimento

**Teriam que ser criadas três páginas para o Orkut, a página Home, página de Login e página de Cadastro.**

**No primeiro momento optei em fazer utilizando o React com o Vite, pois seria mais fácil a questão do roteamento das páginas. Por ter visto recentemente o React em um curso de Javascript que fiz, achei interessante utilizá-lo. Quando já estava no final do projeto vi que foi uma ótima escolha usar o React ao invés de só HTML, CSS e JS puro. Pois vi que tinham elementos que se repetiam nas páginas de Login e Cadastro e não era interessante ficar duplicando os conteúdos, então fui separando em componentes os elementos que eu via que se repetiam nessas páginas. Ficando assim bem mais limpo as páginas de login e cadastro.**

**Havia um arquivo do Figma com todas as telas, para que pudessemos recriar a partir daquele layout.**

- **Comecei fazendo o componente Header do site. Nele estava tendo um pouco de dificuldade na parte do menu mobile. Não estava conseguindo alternar para o menu mobile em dispositivos menores. Mas com algumas pesquisas consegui solucionar esse problema.**

- **Em seguida parti para a criação da página Home. Primeiro foquei no container main que era a seção principal da página(a parte do meio). Peguei os ícones e cores pelo Figma, para deixar o site o mais parecido com o modelo disponibilizado. Depois fiz o left menu, e por fim fiz o right menu. A parte de seguidores/seguindo foi a mais complicada de fazer, pois eu não estava conseguindo deixar o texto do span dentro da imagem, sempre escapava pra fora. Consegui resolver colocando largura e altura máxima para o span.**

- **Depois fui para a parte de Login e Cadastro. Como dito antes, notei que haviam vários elementos que se repetiam, então resolvi criar componentes para esses elementos. Criei o Footer, um componente de Input que recebe o tipo e o placeholder do input. E dois Cards um esquerdo que contêm um conteúdo fixo de uma imagem e frases, e um card direito que contêm um formulário com informações diferentes dependendo da página(login ou cadastro). Ainda neste card direito ele recebe um componente filho que são os componentes de Input do formulário, um título e um booleano que informa se a página é de login ou não. Então depois de criar os componentes, fui estilizar as páginas de Login e Cadastro.**

- **Por fim criei uma página de 'Página não Encontrada', que é chamada caso se passe uma rota inexistente.**

- **Em todo o processo de criação e estilização das páginas e componentes, também fui trabalhando a parte da responsividade dos elementos.**


**Link do site: [https://orkut-jonas.vercel.app/](https://orkut-jonas.vercel.app/)**

<p align="center">
    <strong>Copyright © <a href="https://github.com/jonas-holanda" target="_blank">Jonas Holanda</a>. All Rights Reserved.</strong>
</p>