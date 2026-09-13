import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return next(ApiError.unauthorized('Authentication required'));
  }

  if (req.user.role !== 'admin') {
    return next(ApiError.forbidden('Access denied. Administrator privileges required'));
  }

  next();
};
