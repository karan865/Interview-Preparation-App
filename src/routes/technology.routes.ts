import { Router } from 'express';
import { TechnologyController } from '../controllers/technology.controller';

const router = Router();

router.get('/', TechnologyController.getAll);
router.get('/:idOrSlug', TechnologyController.getByIdOrSlug);

export default router;
