import { UserService } from '../services/user.service';

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
};

type UpdateUserInput = {
  name: string;
  email: string;
};

export function getUsers() {
  return UserService.getAll();
}

export function createUser(data: CreateUserInput) {
  return UserService.create(data);
}

export function getUserById(id: string) {
  return UserService.getById(id);
}

export function updateUser(id: string, data: UpdateUserInput) {
  return UserService.update(id, data);
}
