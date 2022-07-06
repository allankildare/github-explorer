# GitHub Explorer

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)

<div align="center">
    <img src="./src/ui/assets/images/print_github_explorer.png" alt="Captura de tela que mostra a página inicial da aplicação, com um texto introdutório e um campo para busca de informações de um usuário do GitHub qualquer" width="500px" />
</div>

Esta aplicação é um desafio maior, buscando ultrapassar alguns horizontes de quando fiz uma aplicação usando HTML, CSS e JavaScript Vanilla (disponível [neste repositório](https://github.com/allankildare/github-api)).

Você poderá:
- Buscar/Listar todos os repositórios publicos de um usuário do github
- Dado um repositório, listar todas as branches
- Dado uma branch, listar todos os commits daquela branch

Se trata de um desafio técnico e no tempo oferecido eu consegui desenvolver satisfatoriamente o proposto. Ainda assim, existem pontos de melhorias já mapeadas, são elas:
- [ ] Separação de componentes independentes
- [ ] Criação de estilizações em módulos do Sass (possível criação de um tema)
- [ ] Adição de regras do Eslint para melhorar a experiência de desenvolvimento e boas práticas de código
- [ ] Instalação do Jest e Testing Library, criação de testes unitários

### Como instalar
Para clonar, você precisará ter configurado a autenticação SSH _(fortemente recomendada)_:

`git clone git@github.com:allankildare/github-explorer.git`

Ao clonar, abra o diretório do projeto e instale as dependências:

`yarn install`

### Rodar o projeto
O comando usado é o padrão `dev`, para isso rode em seu terminal o seguinte comando:

`yarn dev`

Sua aplicação estará rodando por padrão na [porta 3000](http://localhost:3000) _(verifique se está disponível)_

### Deploy
Para fazer o _deploy_ usei o serviço gratuito da Netlify, o website está disponível [neste link](https://github-explorer-allankildare.netlify.app/).