export interface IUser {
    email: string;
    password: string;
    role: 'student' | 'instructor' | 'admin';
  }
  