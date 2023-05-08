# Pokemon

## Descrição

App de capturar pokemon usando a API do pokemon: [Pokemon Api](https://pokeapi.co/) <br />
Accesse através do link: [Projeto](https://pokemon-beta-teal.vercel.app/)

## Instalação

1. Baixe e instale o Node: [https://nodejs.org/]
2. Clone o repositório: `git clone https://github.com/gustavoliveira94/pokemon.git`
3. \[Opcional\] Instale o Yarn globalmente: `npm install -g yarn`
4. Instale as dependências do projeto: `yarn install` ou `npm install`
5. Inicie o ambiente de desenvolvimento: `npm start` ou `yarn start`.

## Rodando testes

1. `npm run test` ou `yarn test` - Roda os testes unitários com coverage
2. `npm run cypress` ou `yarn cypress` - Roda o teste EndToEnd

## Principais dependências

- [React](https://reactjs.org/)
- [Styled-components](https://styled-components.com/)
- [Redux](https://redux-toolkit.js.org/tutorials/typescript)

## Estrutura de diretórios

```
/
├─ src/              # Aplicação
├─ ├─app/            # Camada de apresentação
├─ ├─config/         # Camada de configurações
├─ ├─contracts/      # Camada de interfaces e types
├─ ├─core/           # Camada onde ficam as configurações de store, utils, serviços
├─ jest.config.js    # Configurações do jest
├─ cypress.config.js # Configurações do cypress
├─ .editorconfig     # Preferência do editorconfig
├─ .eslintrc         # Preferência do linter Javascript
├─ .gitignore        # Lista de arquivos e pastas ignoradas pelo git
├─ .prettierrc       # Preferência do prettier
├─ package.json      # Manifesto do projeto
└─ README.md         # Esse arquivo
```
