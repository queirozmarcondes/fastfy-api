// src/types/fastify.d.ts
import '@fastify/jwt';

declare module 'fastify' {
  interface FastifyInstance {
    authenticate: any;
  }

  interface FastifyRequest {
    jwt: FastifyJWT;
    user: {
      id: string;
      email: string;
    };
  }
}

declare module '@fastify/jwt' {
  interface FastifyJWT {
    payload: { id: string; email: string };
    user: {
      id: string;
      email: string;
    };
  }
}
