import { Request, Response } from 'express';
import { AuthService } from '../services/authService';

export class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await AuthService.login(email, password);
    if (user) {
      res.json({ success: true, data: user });
    } else {
      res.status(401).json({ success: false, message: 'Unauthorized' });
    }
  }
}
