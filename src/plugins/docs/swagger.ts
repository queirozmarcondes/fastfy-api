import fp from 'fastify-plugin';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';

export default fp(async (fastify) => {
  // Registra o Swagger para geração do schema OpenAPI
  await fastify.register(swagger, {
    openapi: {
      info: {
        title: 'Minha API',
        description: 'Documentação automática gerada com Swagger.',
        version: '1.0.0',
      },
      servers: [
        { url: 'http://localhost:3000', description: 'Servidor local' },
      ],
    },
  });

  // Registra a interface Swagger UI na rota /docs
  await fastify.register(swaggerUI, {
    routePrefix: '/docs',
    uiConfig: {
      docExpansion: 'list', // Expande a lista de endpoints
      deepLinking: false, // Desabilita os links profundos na UI
    },
    staticCSP: true, // Recomendado para segurança
    transformStaticCSP: (header) => header, // permite customizar o CSP (opcional)
  });
});
