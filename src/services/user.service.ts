// src/services/user.service.ts

import { users } from '../database/users.db';

interface CreateUserInput {
  name: string;
  email: string;
}

export function listUsers() {
  return users;
}

export function addUser({ name, email }: CreateUserInput) {
  const newUser = {
    id: crypto.randomUUID(),
    name,
    email,
  };

  users.push(newUser);
  return newUser;
}
