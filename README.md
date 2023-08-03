# Documentação da API da Escola

## Introdução

A API da Escola é uma aplicação desenvolvida para fornecer operações CRUD (Create, Read, Update, Delete) para alunos e usuários, juntamente com a funcionalidade de upload de fotos de perfil. A API é construída utilizando a linguagem de programação JavaScript e o banco de dados MariaDB.

## Funcionalidades

### Autenticação

- **POST /api/login**
  - Autentica um usuário e retorna um token de acesso.
  - Parâmetros:
    - `email`: O email do usuário.
    - `senha`: A senha do usuário.

### Usuários

- **GET /api/usuarios**
  - Retorna uma lista de todos os usuários.

- **GET /api/usuarios/:id**
  - Retorna os detalhes de um usuário específico.
  - Parâmetros:
    - `id`: O ID do usuário.

- **POST /api/usuarios**
  - Cria um novo usuário.
  - Parâmetros:
    - `nome`: O nome do usuário.
    - `email`: O email do usuário.
    - `senha`: A senha do usuário.

- **PUT /api/usuarios/:id**
  - Atualiza os detalhes de um usuário específico.
  - Parâmetros:
    - `id`: O ID do usuário.
    - `nome`: Novo nome do usuário.
    - `email`: Novo email do usuário.
    - `senha`: Nova senha do usuário.

- **DELETE /api/usuarios/:id**
  - Exclui um usuário específico.
  - Parâmetros:
    - `id`: O ID do usuário.

### Alunos

- **GET /api/alunos**
  - Retorna uma lista de todos os alunos.

- **GET /api/alunos/:id**
  - Retorna os detalhes de um aluno específico.
  - Parâmetros:
    - `id`: O ID do aluno.

- **POST /api/alunos**
  - Cria um novo aluno.
  - Parâmetros:
    - `nome`: O nome do aluno.
    - `idade`: A idade do aluno.
    - `email`: O email do aluno.
    - `foto`: Foto de perfil do aluno (upload usando o Multer).

- **PUT /api/alunos/:id**
  - Atualiza os detalhes de um aluno específico.
  - Parâmetros:
    - `id`: O ID do aluno.
    - `nome`: Novo nome do aluno.
    - `sobrenome`: Novo sobrenome do aluno.
    - `idade`: Nova idade do aluno.
    - `email`: Novo email do aluno.
    - `altura`: Nova altura do aluno.
    - `peso`: Novo peso do aluno.
    - `foto`: Nova foto de perfil do aluno (upload usando o Multer).

- **DELETE /api/alunos/:id**
  - Exclui um aluno específico.
  - Parâmetros:
    - `id`: O ID do aluno.

## Requisitos

- **Linguagem de Programação:** JavaScript
- **Banco de Dados:** MariaDB

## Dependências

As seguintes dependências estão sendo utilizadas para o desenvolvimento da API:

**Dev Dependencies:**

- express
- nodemon
- prettier
- sequelize-cli
- sucrase

**Dependencies:**

- bcryptjs
- cors
- helmet
- jsonwebtoken
- mariadb
- multer
- sequelize

## Como Usar

1. Clone este repositório para sua máquina local.

2. Instale as dependências necessárias usando `npm install`.

3. Configure as variáveis de ambiente no arquivo `.env` para conexão com o banco de dados, chaves secretas etc.

4. Execute a aplicação usando `npm start`.

## Contribuição

Contribuições são bem-vindas! Se você gostaria de adicionar novas funcionalidades, corrigir bugs ou melhorar a documentação, siga os passos abaixo:

1. Faça um fork deste repositório.

2. Crie um branch para suas modificações:

3. Faça suas modificações e commit:

4. Envie um pull request para este repositório.

## Licença

Este projeto está licenciado sob a Licença MIT. Foi desenvolvido por Erick Staviasz durante o curso de JavaScript e TypeScript ministrado por Otávio Miranda.

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato com staviasz_developer@outlook.com
