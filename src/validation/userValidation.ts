import { body } from 'express-validator';

//Check User Data
export const validateUser = [
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
];
