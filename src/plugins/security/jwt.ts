// src/plugins/jwt.ts
import fp from 'fastify-plugin';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

export default fp(async (app: FastifyInstance) => {
  app.register(import('@fastify/jwt'), {
    secret: process.env.JWT_SECRET || 'supersecret', // em produção use dotenv!
  });

  // Decorar função de verificação
  app.decorate(
    'authenticate',
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    },
  );
});
