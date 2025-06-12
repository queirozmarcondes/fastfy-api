// src/routes/user.routes.ts

import { FastifyInstance } from 'fastify';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
} from '../controllers/user.controller';

import {
  createUserSchema,
  listUsersSchema,
  getUserSchema,
  updateUserSchema,
} from '../schemas/user.schemas';

export const userRoutes = async (app: FastifyInstance) => {
  app.get('/users', { schema: listUsersSchema }, async () => {
    return getUsers();
  });

  app.post('/users', { schema: createUserSchema }, async (request, reply) => {
    const { name, email, password } = request.body as {
      name: string;
      email: string;
      password: string;
    };

    const newUser = createUser({ name, email, password });
    reply.code(201);
    return newUser;
  });

  app.get('/users/:id', { schema: getUserSchema }, async (request, reply) => {
    const { id } = request.params as { id: string };
    const user = getUserById(id);
    if (!user) {
      reply.code(404);
      return { message: 'Usuário não encontrado' };
    }
    return user;
  });

  app.put(
    '/users/:id',
    { schema: updateUserSchema },
    async (request, reply) => {
      const { id } = request.params as { id: string };
      const { name, email } = request.body as { name: string; email: string };
      const updated = updateUser(id, { name, email });
      if (!updated) {
        reply.code(404);
        return { message: 'Usuário não encontrado' };
      }
      return updated;
    },
  );
};
