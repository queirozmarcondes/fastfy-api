// app.ts (atualizado sem Zod)
import Fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import swagger from './plugins/docs/swagger';
import { routes } from './routes';
import { jwtConfig } from './utils/jwtConfig';

const app = Fastify({ logger: true });

app.register(jwtConfig.plugin, jwtConfig.options);

// CORS liberado
app.register(fastifyCors, { origin: '*' });

// Swagger UI
app.register(swagger);

// Rotas
app.register(routes);

const start = async () => {
  try {
    await app.listen({ port: 3000 });
    console.log('Servidor rodando em http://localhost:3000');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
