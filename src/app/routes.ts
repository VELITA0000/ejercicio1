import { Router } from 'express';

import authRoutes from './auth/routes';
import userRoutes from './users/routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', authRoutes);

export default router;