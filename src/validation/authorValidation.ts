import { body } from 'express-validator';

export const validateAuthor = [
  body('name').isString().notEmpty().withMessage('Name is required and should be a string'),
  body('birthdate').isISO8601().withMessage('Birthdate is required and should be a valid date'),
];
