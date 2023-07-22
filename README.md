<h1 align="center">:file_cabinet: Projeto React.js 01</h1>
<br>

## :memo: Descrição

Um aplicativo para fazer uma integração com o [REST Countries API](https://restcountries.com) para extrair os dados do país e exibi-los em tela.

## :desktop_computer: Frontend Mentor - REST Countries API with color theme switcher

![Pré-visualização de design para a API de países REST com desafio de codificação do alternador de tema de cores](./design/desktop-preview.jpg)

## :books: Funcionalidades

O usuários devem ser capazes de:

-   Funcionalidades principais:

    -   [ ] Ver todos os países da API na página inicial.
    -   [ ] Pesquisar um país usando um campo `input`.
    -   [ ] Filtrar países por região.
    -   [ ] Clicar em um país para ver informações mais detalhadas em uma página separada.
    -   [ ] Clicar nos países de fronteira na página de detalhes.
    -   [ ] Alternar o esquema de cores entre o modo claro e escuro.

-   Funcionalidades extras:
    <br>

<!--
## :soon: Implementação futura

-   O que será implementado na próxima sprint?
-->

## :wrench: Tecnologias utilizadas

-   Bibliotecas:

    -   [React.js](https://react.dev/learn "documentação do react.js")
    -   [React Router Dom](https://reactrouter.com/en/main "documentação do react router dom")
    -   [React icons](https://react-icons.github.io/react-icons/ "documentação do react icons")

-   Outras:

    -   [Sass](https://sass-lang.com/documentation/ "documentação do sass")
    -   [vite](https://vitejs.dev/guide/ "documentação do vite")

## :gear: Rodando o projeto

Para rodar o repositório, é necessário clonar o mesmo e dar os seguintes comandos para iniciar o projeto:

```
npm install
```

```
npm run dev
```

## :paperclip: Extensões vs code

Também se faz necessário da instalação das seguintes extensões para a organização do projeto:

-   [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)_(opcional)_

## :building_construction: Estrutura de pastas [\*](https://github.com/joaobibiano/react-js-project-structure-lesson/blob/main/README.md)

`assets`: Serve para armazenar imagens (imagens leves, se forem pesadas sempre prefira hospedar em uma CDN), ícones, etc.

`components`: Componentes reutilizáveis da aplicação. Componentes que são unidades para sua aplicação, um button, um dropdown, um modal, etc.

`hooks`: Essa pasta é utilizada para armazenar hooks que são genéricos, têm interação com hooks do React (useState, useEffect) e normalmente reutilizáveis e qualquer projeto, exemplos: useScreenSize, useLocalStorage, useSessionStorage, useUserActive.

`layout`: Essa pasta é utilizada para os layouts.

`pages`: As pages são as páginas que usam vários componentes. É essa a página que o usuário vai ver.

`services`: Aqui ficam as configurações de HTTP clientes, normalmente utilizando axios.

`store`: Ficam as definições de state managers, context api, zustand, redux.

`utils`: Funções utilitárias como formatCurrency, formatPhone, convertTimezone, parsePhone (javascript puro).

## :handshake: Colaboradores

<!-- use o https://docs.github.com/rest/users/(seuNome) para encontrar a imagem do seu avatar no github -->
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/eriveltondasilva">
        <img src="https://avatars.githubusercontent.com/u/108964822?v=4" width="100px;" alt="Foto de Erivelton Silva no GitHub"/><br>
        <sub>
          <b>Erivelton Silva</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="http://github.com/Luiz-Honorato">
        <img src="https://avatars.githubusercontent.com/u/105612296?v=4" width="100px;" alt="Foto de Luiz Honorato no GitHub"/><br>
        <sub>
          <b>Luiz Honorato</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="http://github.com/derciojds">
        <img src="https://avatars.githubusercontent.com/u/37440439?v=4" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
        <sub>
          <b>Dercio JdS</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="http://github.com/tatialveso">
        <img src="https://avatars.githubusercontent.com/u/56259137?v=4" width="100px;" alt="Foto de Tati Alves no GitHub"/><br>
        <sub>
          <b>tatialveso</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="http://github.com/Edlavio">
        <img src="https://github.com/Edlavio.png" width="100px;" alt="Foto de Pedro Alberto no GitHub"/><br>
        <sub>
          <b>Pedro Alberto</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Manuel-AC-Ventura">
        <img src="https://github.com/Manuel-AC-Ventura.png" width="100px;" alt="Foto de Pedro Alberto no GitHub"/><br>
        <sub>
          <b>Manuel Ventura</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/fxdias">
        <img src="https://github.com/fxdias.png" width="100px;" alt="Foto de Fernando Ximenes no GitHub"/><br>
        <sub>
          <b>Fernando Ximenes</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 👨🏽‍💻 Git Flow

### Branches

-   main -» branch em produção
-   dev -» branch para desenvolvimento

Branches locais devem seguir o padrao: <iniciais do colaborador/identificador da task/titulo da task> ex: WA/TASK-130/Página_de_Detalhes

### Pull Requests

Cada alteração deve ser feita a partir de PR's. <br>
Devs devem fazer o checkout da branch `dev` e criar uma PR para a mesma <small>(branch dev)</small>. <br>
Após a PR ser aprovada, o criador da PR deverá fazer o merge (squash and merge) e deletar a sua branch.

### Commits

Ficou convencionado que não seguiremos padrão, apenas que os commits devem ser em português.

<br>

## :dart: Status do projeto

<br>

## :rocket: O deploy do projeto

<br>
