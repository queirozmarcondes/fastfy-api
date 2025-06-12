// src/routes/auth.routes.ts
import { FastifyInstance } from 'fastify';
import { login } from '../controllers/auth.controller';

const loginSchema = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
        description: 'Email do usuário para login',
      },
      password: {
        type: 'string',
        minLength: 6,
        description: 'Senha do usuário',
      },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: {
          type: 'string',
          description: 'JWT de autenticação',
        },
      },
      description: 'Token JWT retornado em caso de sucesso',
    },
    401: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
      description: 'Erro de autenticação',
    },
  },
  tags: ['Autenticação'],
  summary: 'Realiza o login do usuário e retorna um token JWT',
  description: 'Endpoint para autenticação de usuário com email e senha.',
};

export async function authRoutes(app: FastifyInstance) {
  app.post('/login', { schema: loginSchema }, login);
}
