import { Router } from 'express';
import authRoutes from './auth.routes';
import technologyRoutes from './technology.routes';
import topicRoutes from './topic.routes';
import preparationLevelRoutes from './preparationLevel.routes';
import questionRoutes from './question.routes';
import progressRoutes from './progress.routes';
import revisionRoutes from './revision.routes';
import dashboardRoutes from './dashboard.routes';
import searchRoutes from './search.routes';
import adminRoutes from './admin.routes';
import examRoutes from './exam.routes';

const router = Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'UP',
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
    },
  });
});

router.use('/auth', authRoutes);
router.use('/technologies', technologyRoutes);
router.use('/topics', topicRoutes);
router.use('/preparation-levels', preparationLevelRoutes);
router.use('/questions', questionRoutes);
router.use('/progress', progressRoutes);
router.use('/revision', revisionRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/search', searchRoutes);
router.use('/admin', adminRoutes);
router.use('/exams', examRoutes);

export default router;
