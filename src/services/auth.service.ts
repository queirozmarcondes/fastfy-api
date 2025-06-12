// src/services/auth.service.ts

import bcrypt from 'bcrypt';
import { UserService } from './user.service';

export class AuthService {
  static async validateUser(email: string, password: string) {
    const user = UserService.getAll().find((u) => u.email === email);
    if (!user) return null;

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return null;

    return user; // aqui está certo, retorna o usuário se passou no compare
  }
}
