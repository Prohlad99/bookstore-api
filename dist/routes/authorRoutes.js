"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authorController_1 = require("../controllers/authorController");
var authorValidation_1 = require("../validation/authorValidation");
var authMiddleware_1 = require("../middleware/authMiddleware");
var validationMiddleware_1 = require("../middleware/validationMiddleware");
// Author Routes
var router = (0, express_1.Router)();
router.post('/', authMiddleware_1.authenticateJWT, authorValidation_1.validateAuthor, validationMiddleware_1.validationResultMiddleware, authorController_1.createAuthor);
router.get('/', authMiddleware_1.authenticateJWT, authorController_1.getAllAuthors);
router.get('/:id', authMiddleware_1.authenticateJWT, authorController_1.getAuthorById);
router.put('/:id', authMiddleware_1.authenticateJWT, authorValidation_1.validateAuthor, validationMiddleware_1.validationResultMiddleware, authorController_1.updateAuthor);
router.delete('/:id', authMiddleware_1.authenticateJWT, authorController_1.deleteAuthor);
router.get('/:id/books', authMiddleware_1.authenticateJWT, authorController_1.getBooksByAuthor);
exports.default = router;
