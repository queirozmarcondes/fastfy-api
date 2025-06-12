import { FastifyInstance } from 'fastify';
import { userRoutes } from './userRoutes';

export const routes = async (app: FastifyInstance) => {
  app.register(userRoutes);
};
