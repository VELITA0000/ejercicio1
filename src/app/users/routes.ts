import { Router } from "express";
import { getUsers } from "./controller";
import { authMiddleware } from '../middlewares/auth';

const router = Router ();

router.get('/', authMiddleware, getUsers)

export default router;