import { Router } from 'express';
import authRouter from "./auth.js"
import recipesRoutes from "./recipes.js"

const router = Router();

router.use('/auth', authRouter);
router.use('/recipes', recipesRoutes);


export default router;
