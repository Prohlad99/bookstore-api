import { Router } from 'express';
import { getAllAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor, getBooksByAuthor } from '../controllers/authorController';
import { validateAuthor } from '../validation/authorValidation';
import { authenticateJWT } from '../middleware/authMiddleware';
import { validationResultMiddleware } from '../middleware/validationMiddleware';

// Author Routes
const router = Router();

router.post('/', authenticateJWT, validateAuthor, validationResultMiddleware, createAuthor);
router.get('/', authenticateJWT, getAllAuthors);
router.get('/:id', authenticateJWT, getAuthorById);
router.put('/:id', authenticateJWT, validateAuthor, validationResultMiddleware, updateAuthor);
router.delete('/:id', authenticateJWT, deleteAuthor);
router.get('/:id/books', authenticateJWT, getBooksByAuthor);


export default router;
