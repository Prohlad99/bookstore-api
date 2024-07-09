import express from 'express';
import { register, login } from '../controllers/authController';
import { validateUser } from '../validation/userValidation';
import { validationResultMiddleware } from '../middleware/validationMiddleware';

//User Routes
const router = express.Router();

router.post('/register', validateUser, validationResultMiddleware, register);
router.post('/login', login);

export default router;
