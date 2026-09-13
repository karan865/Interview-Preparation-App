import { Response } from 'express';

export interface ApiResponseOptions<T = any> {
  res: Response;
  statusCode?: number;
  data?: T;
  message?: string;
}

export const sendSuccess = <T = any>({
  res,
  statusCode = 200,
  data,
}: ApiResponseOptions<T>) => {
  return res.status(statusCode).json({
    success: true,
    data: data !== undefined ? data : null,
  });
};

export const sendError = ({
  res,
  statusCode = 500,
  message = 'An unexpected error occurred',
  errors = [],
}: {
  res: Response;
  statusCode?: number;
  message?: string;
  errors?: any[];
}) => {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
  });
};
