// src/controllers/auth.controller.ts
import { FastifyRequest, FastifyReply } from 'fastify';
import { AuthService } from '../services/auth.service';

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = request.body as {
    email: string;
    password: string;
  };

  const user = await AuthService.validateUser(email, password);
  if (!user) {
    return reply.code(401).send({ message: 'Credenciais inválidas' });
  }

  const token = request.server.jwt.sign({ id: user.id, email: user.email });

  return reply.send({ token });
}
