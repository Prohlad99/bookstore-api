import { body } from 'express-validator';

//Check Book Data
export const validateBook = [
  body('title').isString().notEmpty().withMessage('Title is required and should be a string'),
  body('published_date').isISO8601().withMessage('Published date is required and should be a valid date'),
  body('author_id').isInt().withMessage('Author ID is required and should be an integer'),
];
