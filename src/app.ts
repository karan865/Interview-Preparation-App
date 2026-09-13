import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes';
import { errorHandler } from './middleware/error.middleware';
import { sendError } from './utils/apiResponse';
import { env } from './config/env';

export const createApp = (): Application => {
  const app = express();

  // Security Middleware
  app.use(helmet());

  const getCorsOrigin = () => {
    if (env.CORS_ORIGIN === '*') return true;
    if (env.CORS_ORIGIN.includes(',')) {
      return env.CORS_ORIGIN.split(',').map((origin) => origin.trim());
    }
    return env.CORS_ORIGIN;
  };

  app.use(
    cors({
      origin: getCorsOrigin(),
      credentials: true,
    })
  );

  // Body Parsing
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Logging
  if (env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  // Root Welcome & Health
  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      data: {
        name: 'Developer Interview Revision / Knowledge Base API',
        version: '1.0.0',
        documentation: '/api/health',
      },
    });
  });

  // Mount API Routes
  app.use('/api', routes);

  // 404 Not Found Handler
  app.use((req: Request, res: Response) => {
    sendError({
      res,
      statusCode: 404,
      message: `Route not found: ${req.method} ${req.originalUrl}`,
    });
  });

  // Centralized Error Handling Middleware
  app.use(errorHandler);

  return app;
};

export default createApp();
