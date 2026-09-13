import mongoose from 'mongoose';
import { env } from './env';

let mongodInstance: any = null;

export const connectDB = async (): Promise<void> => {
  try {
    // Attempt connection to provided MONGODB_URI
    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log(`[Database] Connected to MongoDB at ${env.MONGODB_URI.replace(/:([^:@]+)@/, ':****@')}`);
  } catch (err: any) {
    console.warn(`[Database] MongoDB connection failed: ${err.message}`);

    if (env.NODE_ENV === 'production') {
      console.error('[Database] In-memory MongoDB fallback is disabled in production.');
      console.error('[Database] Please verify your MONGODB_URI environment variable and MongoDB Atlas IP access whitelist (0.0.0.0/0).');
      throw err;
    }

    console.log('[Database] Starting in-memory MongoDB instance for local development / testing...');

    try {
      const fs = await import('fs');
      const path = await import('path');
      const localTmpDir = path.resolve(process.cwd(), '.mongo-tmp');
      if (!fs.existsSync(localTmpDir)) {
        fs.mkdirSync(localTmpDir, { recursive: true });
      }

      const { MongoMemoryServer } = await import('mongodb-memory-server');
      mongodInstance = await MongoMemoryServer.create({
        instance: {
          dbPath: localTmpDir,
        },
      });
      const uri = mongodInstance.getUri();
      await mongoose.connect(uri);
      console.log(`[Database] Connected to In-Memory MongoDB at ${uri}`);
    } catch (memErr: any) {
      console.error('[Database] Failed to initialize in-memory MongoDB:', memErr.message);
      throw memErr;
    }
  }
};

export const disconnectDB = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
    if (mongodInstance) {
      await mongodInstance.stop();
      mongodInstance = null;
    }
    console.log('[Database] Disconnected from MongoDB');
  } catch (err: any) {
    console.error('[Database] Error during disconnect:', err.message);
  }
};
