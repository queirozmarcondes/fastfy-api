// src/controllers/user.controller.ts

import { listUsers, addUser } from '../services/user.service';

export function getUsers() {
  return listUsers();
}

export function createUser({ name, email }: { name: string; email: string }) {
  return addUser({ name, email });
}
