import { Router } from 'express';
import authRouter from "./auth.js"



const router = Router();


router.use('/auth', authRouter);
// router.use('/recipes', recipesRoutes);


export default router;
