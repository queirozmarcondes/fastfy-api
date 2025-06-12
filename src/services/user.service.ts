import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  hashedPassword: string;
};

type UpdateUserInput = {
  name: string;
  email: string;
};

const users: User[] = [];

export class UserService {
  static getAll(): User[] {
    return users;
  }

  static getById(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }

  static async create(data: CreateUserInput): Promise<User> {
    // Verifica se o email já está cadastrado
    const hashedPassword = await bcrypt.hash(data.password, SALT_ROUNDS);

    const newUser: User = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      password: hashedPassword,
    };

    users.push(newUser);
    return newUser;
  }

  static update(id: string, data: UpdateUserInput): User | null {
    const index = users.findIndex((user) => user.id === id);
    if (index === -1) return null;

    users[index] = { ...users[index], ...data };
    return users[index];
  }
}
