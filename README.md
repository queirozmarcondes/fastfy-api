# Fastify User CRUD API

Uma API básica utilizando [Fastify](https://www.fastify.io/) para realizar operações CRUD (Create, Read, Update, Delete) de cadastro de usuários.

## Funcionalidades

- **Criar usuário**
- **Listar usuários**
- **Buscar usuário por ID**
- **Atualizar usuário**
- **Remover usuário**

## Instalação

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

## Executando o projeto

```bash
npm run dev
```

A API estará disponível em `http://localhost:3000`.

## Rotas

| Método | Rota         | Descrição              |
| ------ | ------------ | ---------------------- |
| POST   | `/users`     | Cadastrar novo usuário |
| GET    | `/users`     | Listar todos usuários  |
| GET    | `/users/:id` | Buscar usuário por ID  |
| PUT    | `/users/:id` | Atualizar usuário      |
| DELETE | `/users/:id` | Remover usuário        |

## Exemplo de usuário

```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@email.com"
}
```

## Tecnologias

- [Fastify](https://www.fastify.io/)
- Node.js

## Licença

Este projeto está sob a licença MIT.
