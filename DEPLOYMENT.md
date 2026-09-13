# Deployment Guide (100% Free Hosting)

This guide walks you through deploying this Node.js/TypeScript backend for free using **Render** (for the backend API) and **MongoDB Atlas** (for the cloud database).

---

## Step 1: Set Up Free Cloud MongoDB (MongoDB Atlas)

Free hosting platforms (like Render, Railway, or Koyeb) are ephemeral and cannot run local disk-based databases. You need a free cloud MongoDB instance:

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Create a new database cluster and select the **M0 Free Tier** (512MB storage, free forever).
3. Under **Security > Database Access**:
   - Create a database user (e.g., username `admin_user` and a strong password). Note down this password!
4. Under **Security > Network Access**:
   - Click **Add IP Address**.
   - Select **Allow Access from Anywhere** (`0.0.0.0/0`). *(This is required so cloud hosting providers can connect to your database).*
5. Click **Connect > Drivers (Node.js)**:
   - Copy your connection string. It will look like:
     ```
     mongodb+srv://admin_user:<password>@cluster0.abcde.mongodb.net/interview_revision_db?retryWrites=true&w=majority
     ```
   - Replace `<password>` with your actual password and ensure the database name is specified (e.g. `interview_revision_db`).

---

## Step 2: Push Your Code to GitHub

Make sure your latest code is committed and pushed to a GitHub repository:

```bash
git add .
git commit -m "chore: prepare backend for cloud deployment"
git push origin main
```

*(Note: Your `.env` file is in `.gitignore`, so your local secrets won't be pushed).*

---

## Step 3: Deploy on Render (Free Web Service)

1. Sign up / log in to [Render](https://render.com).
2. Click **New + > Web Service**.
3. Connect your GitHub repository.
4. Configure the service settings:
   - **Name**: `interview-prep-api` (or your preferred name)
   - **Region**: Choose the region closest to your MongoDB Atlas cluster (e.g., Oregon or Frankfurt)
   - **Branch**: `main` (or `master`)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (0.1 CPU, 512 MB RAM)

5. Scroll down to **Environment Variables** and add:

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `NODE_ENV` | `production` | Enables production mode optimizations |
| `MONGODB_URI` | `mongodb+srv://...` | Your MongoDB Atlas connection string from Step 1 |
| `JWT_SECRET` | `generate-a-long-random-string-here` | Secret key for signing JWT auth tokens |
| `JWT_EXPIRES_IN`| `7d` | Token expiry duration |
| `CORS_ORIGIN` | `*` *(or your frontend URL, e.g., `https://my-app.vercel.app`)* | Allowed frontend origins (supports comma-separated list) |

6. Click **Deploy Web Service**.

---

## Step 4: Verification & Automatic Seeding

1. Once Render finishes the build, check the Render deployment logs.
2. You will see:
   ```text
   [Database] Connected to MongoDB at mongodb+srv://admin_user:****@cluster...
   [Server] Database is empty. Running initial content seeder...
   [Seeder] Seeded 10 technologies, 100 topics, and 250+ canonical questions.
   🚀 Interview Revision API Server running on port 10000
   📡 Environment: production
   ```
   *The backend automatically detects when the database is empty and seeds all technologies, topics, canonical questions, and the default admin user.*

3. Test your live deployment in your browser or Postman:
   - Root URL: `https://your-app-name.onrender.com/`
   - Health Check: `https://your-app-name.onrender.com/api/health`
   - Technologies: `https://your-app-name.onrender.com/api/technologies`

---

## Important Free Tier Notes

- **Cold Starts**: Render's free tier spins down after 15 minutes of inactivity. The first request after sleep may take ~30-50 seconds while the instance wakes up. Subsequent requests are instant.
- **Alternative Free Hosts**: You can also deploy this exact setup on **Railway**, **Koyeb**, or **Fly.io** using the same build and start commands (`npm install && npm run build` and `npm start`).
