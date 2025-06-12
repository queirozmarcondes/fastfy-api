import { FastifyInstance } from 'fastify';
import { userRoutes } from './userRoutes';
import { authRoutes } from './auth.routes';

export const routes = async (app: FastifyInstance) => {
  app.register(userRoutes, { prefix: '/users' });
  app.register(authRoutes, { prefix: '/auth' });
};
