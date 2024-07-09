import { Router } from 'express';
import { getAllBooks, getBookById, createBook, updateBook, deleteBook, getBooksByAuthorId } from '../controllers/bookController';
import { validateBook } from '../validation/bookValidation';
import { authenticateJWT } from '../middleware/authMiddleware';
import { validationResultMiddleware } from '../middleware/validationMiddleware';

//Book Routes
const router = Router();

router.post('/', authenticateJWT, validateBook, validationResultMiddleware, createBook);
router.get('/', authenticateJWT, getAllBooks);
router.get('/:id',authenticateJWT, getBookById);
router.put('/:id', authenticateJWT, validateBook, validationResultMiddleware, updateBook);
router.delete('/:id',authenticateJWT, deleteBook);
router.get('/author/:id',authenticateJWT, getBooksByAuthorId);

export default router;
