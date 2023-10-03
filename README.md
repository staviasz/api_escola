## Introdução

A API da Escola é uma aplicação desenvolvida para fornecer operações CRUD (Create, Read, Update, Delete) para alunos e usuários, juntamente com a funcionalidade de upload de fotos de perfil. A API é construída utilizando a linguagem de programação JavaScript e o banco de dados Postgresql.

### Clone do Repositório

- Faça um clone do repositório do projeto a partir do repositório remoto.

### Instalação das Dependências

- Execute o comando `npm install` para instalar todas as dependências do projeto.

### Configuração do Arquivo .env

- Crie um arquivo `.env` com base no exemplo fornecido no arquivo `.envExample`.
- Forneça as informações necessárias para a conexão com o PostgreSQL e Cloudinary.

### Conexão com o PostgreSQL

- Certifique-se de que o PostgreSQL está instalado e em execução na sua máquina ou servidor.
- Verifique as configurações de conexão no arquivo `.env`.

### Configuração do Cloudinary

- Crie uma conta no Cloudinary (se ainda não tiver uma).
- Obtenha as credenciais necessárias (API Key, API Secret, Cloud Name) e configure no arquivo `.env`.

### Execução das Migrações do Sequelize

- Execute o comando `npx sequelize-cli db:migrate` para aplicar as migrações e criar as tabelas no banco de dados.

## Rota /alunos

- **GET (/)**
  - *Descrição:* Retorna a lista de todos os alunos cadastrados.

- **POST (/)**
  - *Descrição:* Cria um novo aluno com os dados fornecidos no corpo da requisição.

## Rota /alunos/:id

- **GET (/:id)**
  - *Descrição:* Retorna os detalhes de um aluno específico com base no ID fornecido.

- **PUT (/:id)**
  - *Descrição:* Atualiza os dados de um aluno específico com base no ID fornecido.

- **DELETE (/:id)**
  - *Descrição:* Exclui um aluno específico com base no ID fornecido.

## Rota /users

- **GET (/)**
  - *Descrição:* Retorna a lista de todos os usuários cadastrados.

- **POST (/)**
  - *Descrição:* Cria um novo usuário com os dados fornecidos no corpo da requisição.

## Rota /users/:id

- **GET (/:id)**
  - *Descrição:* Retorna os detalhes de um usuário específico com base no ID fornecido.

- **PUT (/)**
  - *Descrição:* Atualiza os dados do usuário autenticado.

- **DELETE (/)**
  - *Descrição:* Exclui o usuário autenticado.

![Print]([https://github.com/seu-usuario/seu-repositorio/nome-da-imagem.png](https://res-console.cloudinary.com/drko8mcj9/thumbnails/v1/image/upload/v1696339416/U2NyZWVuc2hvdF9mcm9tXzIwMjMtMTAtMDNfMTAtMTgtMjZfdHZ4dWho/as_is)https://res-console.cloudinary.com/drko8mcj9/thumbnails/v1/image/upload/v1696339416/U2NyZWVuc2hvdF9mcm9tXzIwMjMtMTAtMDNfMTAtMTgtMjZfdHZ4dWho/as_is)

## Rota /tokens

- **POST (/)**
  - *Descrição:* Gera um token de autenticação com base nas credenciais de e-mail e senha fornecidas.
