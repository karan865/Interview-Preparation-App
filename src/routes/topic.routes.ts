import { Router } from 'express';
import { TopicController } from '../controllers/topic.controller';

const router = Router();

router.get('/', TopicController.getAll);
router.get('/:idOrSlug', TopicController.getByIdOrSlug);

export default router;
