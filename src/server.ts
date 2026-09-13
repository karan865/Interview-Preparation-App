import app from './app';
import { env } from './config/env';
import { connectDB, disconnectDB } from './config/database';
import { Technology } from './models/Technology';
import { Question } from './models/Question';
import { runSeeder } from './seed/seeder';
import { seedOrUpdateMCQs } from './seed/seedMcqs';

const startServer = async () => {
  try {
    await connectDB();

    const techCount = await Technology.countDocuments();
    if (techCount === 0) {
      console.log('[Server] Database is empty. Running initial content seeder...');
      await runSeeder(false);
    } else {
      const mcqCount = await Question.countDocuments({ 'mcq.enabled': true });
      if (mcqCount < 250) {
        console.log('[Server] Seeding/updating curated interview MCQs in database...');
        await seedOrUpdateMCQs();
      }
    }

    const HOST = '0.0.0.0';
    const server = app.listen(env.PORT, HOST, () => {
      console.log(`=======================================================`);
      console.log(`🚀 Interview Revision API Server running on port ${env.PORT}`);
      console.log(`📡 Environment: ${env.NODE_ENV}`);
      console.log(`📖 Health check: http://${HOST}:${env.PORT}/api/health`);
      console.log(`=======================================================`);
    });

    const shutdown = async (signal: string) => {
      console.log(`\nReceived ${signal}. Shutting down gracefully...`);
      server.close(async () => {
        await disconnectDB();
        console.log('Server closed.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
