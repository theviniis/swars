# Twitter Wars

Twitter Wars é uma rede social do Star Wars inspirada no Twitter criada para o teste de Desenvolvedor React.

## Stack utilizada

**Front-end:** React, react-router-dom, history, SASS

## Roadmap

- Definir um layout para a aplicação;

- Criar um hook que faça um fetch em uma determinada url; A partir do retorno da url verifica se existe um results.next; Caso tenha, ele faz um novo fetch passando a url results.next até retornar null;

- Definir as rotas da aplicação;

- Criar um pseudo feed exibindo os posts a partir de um objeto;

- Criar um componente que realiza um novo post armazenando o mesmo em um estado;

- Renderizar um component funcional reutilizavel que exibe todas as caracteriesticas do objeto (people, planets e especies);

- Criar um componente que caso o retorno do objeto acima seja um array, realize um novo fetch para cada item desse array renderizando então uma tag summary > details com as informações (pessoas residentes do planeta, filmes, species e veículos);

- Realizar pequenos ajustes na responsividade;

## Melhorias

- Refatorar o componente de lista para que realize um fetch na informação 'homeworld' e exiba o dado de forma correta;

- Exibir um avatar para cada personagem;

- Adicionar a capacidade de alterar o avatar;

- Criar uma tela de login fake usando JWT;

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/theviniis/swars.git
```

Entre no diretório do projeto

```bash
  cd swars
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```

## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm build
```
