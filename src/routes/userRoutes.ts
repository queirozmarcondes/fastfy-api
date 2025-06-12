// src/routes/user.routes.ts

import { FastifyInstance } from 'fastify';
import { createUser, getUsers } from '../controllers/user.controller';

const createUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      name: {
        type: 'string',
        minLength: 1,
        description: 'Nome completo do usuário',
      },
      email: {
        type: 'string',
        format: 'email',
        description: 'Endereço de email do usuário',
      },
      password: {
        type: 'string',
        minLength: 6,
        description: 'Senha com mínimo de 6 caracteres',
      },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid', description: 'UUID do usuário' },
        name: { type: 'string', description: 'Nome completo do usuário' },
        email: { type: 'string', description: 'Email do usuário' },
      },
    },
  },
  tags: ['Usuários'],
  summary: 'Cria um novo usuário',
  description: 'Cria um novo usuário com nome, email e senha. A senha não é retornada na resposta.',
};

const listUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid', description: 'UUID do usuário' },
          name: { type: 'string', description: 'Nome do usuário' },
          email: { type: 'string', description: 'Email do usuário' },
        },
      },
    },
  },
  tags: ['Usuários'],
  summary: 'Lista todos os usuários',
  description: 'Retorna uma lista de todos os usuários cadastrados no sistema.',
};

export const userRoutes = async (app: FastifyInstance) => {
  app.get('/users', { schema: listUsersSchema }, async () => {
    return getUsers();
  });

  app.post('/users', { schema: createUserSchema }, async (request, reply) => {
    const { name, email } = request.body as {
      name: string;
      email: string;
      password: string;
    };

    const newUser = createUser({ name, email });
    reply.code(201);
    return newUser;
  });
};
