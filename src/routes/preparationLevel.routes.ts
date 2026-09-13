import { Router } from 'express';
import { PreparationLevelController } from '../controllers/preparationLevel.controller';

const router = Router();

router.get('/', PreparationLevelController.getAll);

export default router;
