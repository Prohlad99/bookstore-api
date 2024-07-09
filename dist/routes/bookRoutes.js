"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var bookController_1 = require("../controllers/bookController");
var bookValidation_1 = require("../validation/bookValidation");
var authMiddleware_1 = require("../middleware/authMiddleware");
var validationMiddleware_1 = require("../middleware/validationMiddleware");
//Book Routes
var router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticateJWT, bookValidation_1.validateBook, validationMiddleware_1.validationResultMiddleware, bookController_1.createBook);
router.get('/', authMiddleware_1.authenticateJWT, bookController_1.getAllBooks);
router.get('/:id', authMiddleware_1.authenticateJWT, bookController_1.getBookById);
router.put('/:id', authMiddleware_1.authenticateJWT, bookValidation_1.validateBook, validationMiddleware_1.validationResultMiddleware, bookController_1.updateBook);
router.delete('/:id', authMiddleware_1.authenticateJWT, bookController_1.deleteBook);
router.get('/author/:id', authMiddleware_1.authenticateJWT, bookController_1.getBooksByAuthorId);
exports.default = router;
