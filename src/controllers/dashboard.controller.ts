import { Request, Response, NextFunction } from 'express';
import { DashboardService } from '../services/dashboard.service';
import { sendSuccess } from '../utils/apiResponse';

export class DashboardController {
  static async getDashboard(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!._id.toString();
      const metrics = await DashboardService.getDashboardMetrics(userId);
      return sendSuccess({ res, data: metrics });
    } catch (error) {
      next(error);
    }
  }
}
