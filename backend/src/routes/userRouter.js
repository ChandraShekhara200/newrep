// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import { getUserProfile } from '../controllers/userController';
import { loggedInUser } from '../middlewares/authMiddleware';


const userRouter = Router();
userRouter.get("/me",loggedInUser,getUserProfile);

export default userRouter;