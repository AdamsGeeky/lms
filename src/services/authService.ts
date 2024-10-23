import { User } from '../models/User';
import { IUser } from '../types/authTypes';

export class AuthService {
  static async login(email: string, password: string): Promise<IUser | null> {
    const user = await User.findOne({ email, password });
    return user ? user : null;
  }
}
