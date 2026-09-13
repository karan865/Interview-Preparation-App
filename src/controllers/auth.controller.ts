import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';
import { sendSuccess } from '../utils/apiResponse';

export class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.register(req.body);
      return sendSuccess({
        res,
        statusCode: 201,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.login(req.body);
      return sendSuccess({
        res,
        statusCode: 200,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async me(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.getProfile(req.user!._id.toString());
      return sendSuccess({
        res,
        statusCode: 200,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }

  static async updatePreferences(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.updatePreferences(req.user!._id.toString(), req.body);
      return sendSuccess({
        res,
        statusCode: 200,
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}
