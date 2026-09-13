import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongod: MongoMemoryServer | null = null;

let currentTestTmpDir: string | null = null;

export const setupTestDB = async (): Promise<void> => {
  // Disconnect any existing connection
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }

  const workerId = process.env.JEST_WORKER_ID || '1';

  // First try connecting to running local mongod
  let activeUri: string | null = process.env.TEST_MONGODB_URI || null;
  if (!activeUri) {
    try {
      const { execSync } = require('child_process');
      const tasklist = execSync('tasklist /FI "IMAGENAME eq mongod*" /FO CSV /NH').toString();
      const match = tasklist.match(/"([^"]+)","(\d+)"/);
      if (match) {
        const pid = match[2];
        const netstat = execSync('netstat -ano').toString();
        for (const line of netstat.split('\n')) {
          if (line.includes('LISTENING') && line.trim().endsWith(pid)) {
            const parts = line.trim().split(/\s+/);
            const port = parts[1].split(':').pop();
            activeUri = `mongodb://127.0.0.1:${port}`;
            break;
          }
        }
      }
    } catch {}
  }

  if (activeUri) {
    try {
      const runningLocalUri = `${activeUri.replace(/\/$/, '')}/test_worker_${workerId}`;
      await mongoose.connect(runningLocalUri, { serverSelectionTimeoutMS: 1500 });
      return;
    } catch {
      // fallback
    }
  }

  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri);
};

export const clearTestDB = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  }
};

export const teardownTestDB = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
  }
  if (mongod) {
    await mongod.stop();
    mongod = null;
  }
  if (currentTestTmpDir) {
    try {
      const fs = require('fs');
      if (fs.existsSync(currentTestTmpDir)) {
        fs.rmSync(currentTestTmpDir, { recursive: true, force: true });
      }
    } catch {
      // ignore cleanup error if lock takes a moment to release
    }
    currentTestTmpDir = null;
  }
};
