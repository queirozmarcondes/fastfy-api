// src/schemas/user.schemas.ts

export const createUserSchema = {
  body: {
    type: 'object',
    required: ['name', 'email', 'password'],
    properties: {
      name: { type: 'string', minLength: 1, description: 'Nome completo do usuário' },
      email: { type: 'string', format: 'email', description: 'Endereço de email do usuário' },
      password: { type: 'string', minLength: 6, description: 'Senha com mínimo de 6 caracteres' },
    },
  },
  response: {
    201: {
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid', description: 'UUID do usuário' },
        name: { type: 'string', description: 'Nome completo do usuário' },
        email: { type: 'string', description: 'Email do usuário' },
      },
    },
  },
  tags: ['Usuários'],
  summary: 'Cria um novo usuário',
  description: 'Cria um novo usuário com nome, email e senha. A senha não é retornada na resposta.',
  swagger: {
    requestBody: {
      content: {
        'application/json': {
          example: {
            name: 'João da Silva',
            email: 'joao@example.com',
            password: 'senha123',
          },
        },
      },
    },
  },
};

export const listUsersSchema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid', description: 'UUID do usuário' },
          name: { type: 'string', description: 'Nome do usuário' },
          email: { type: 'string', description: 'Email do usuário' },
        },
      },
    },
  },
  tags: ['Usuários'],
  summary: 'Lista todos os usuários',
  description: 'Retorna uma lista de todos os usuários cadastrados no sistema.',
};

export const getUserSchema = {
  tags: ['Usuários'],
  summary: 'Obtém um usuário por ID',
  description: 'Retorna os detalhes de um usuário específico pelo seu ID.',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', format: 'uuid', description: 'UUID do usuário' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};

export const updateUserSchema = {
  tags: ['Usuários'],
  summary: 'Atualiza um usuário existente',
  description: 'Atualiza os detalhes de um usuário existente pelo seu ID.',
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', format: 'uuid', description: 'UUID do usuário' },
    },
  },
  body: {
    type: 'object',
    required: ['name', 'email'],
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        email: { type: 'string' },
      },
    },
    404: {
      type: 'object',
      properties: {
        message: { type: 'string' },
      },
    },
  },
};
