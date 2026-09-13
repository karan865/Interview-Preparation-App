import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';
import { sendError } from '../utils/apiResponse';
import { ZodError } from 'zod';

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  // If it's our custom operational ApiError
  if (err instanceof ApiError) {
    return sendError({
      res,
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
    });
  }

  // Zod validation error
  if (err instanceof ZodError) {
    const formattedErrors = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));
    return sendError({
      res,
      statusCode: 400,
      message: 'Validation failed',
      errors: formattedErrors,
    });
  }

  // Mongoose CastError (invalid ObjectId)
  if (err.name === 'CastError') {
    return sendError({
      res,
      statusCode: 400,
      message: `Invalid ID format for path '${err.path}'`,
      errors: [{ path: err.path, value: err.value }],
    });
  }

  // Mongoose duplicate key error (E11000)
  if (err.code === 11000) {
    const fields = Object.keys(err.keyValue || {});
    return sendError({
      res,
      statusCode: 409,
      message: `Duplicate entry for field(s): ${fields.join(', ')}`,
      errors: [{ fields: err.keyValue }],
    });
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return sendError({
      res,
      statusCode: 401,
      message: 'Invalid authorization token',
    });
  }

  if (err.name === 'TokenExpiredError') {
    return sendError({
      res,
      statusCode: 401,
      message: 'Authorization token expired',
    });
  }

  // Fallback for unhandled internal server error
  console.error('[Unhandled Server Error]', err);
  return sendError({
    res,
    statusCode: 500,
    message: err.message || 'Internal server error',
    errors: process.env.NODE_ENV === 'development' ? [err.stack] : [],
  });
};
