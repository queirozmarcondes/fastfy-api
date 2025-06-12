import fastifyJwt from '@fastify/jwt';
import type { Algorithm } from 'jsonwebtoken';

const algorithm: Algorithm = 'HS256';

export const jwtConfig = {
  plugin: fastifyJwt,
  options: {
    secret: process.env.JWT_SECRET || 'supersecretkey',
    sign: {
      expiresIn: '1h',
      algorithm,
    },
  },
};
