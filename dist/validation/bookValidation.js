"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBook = void 0;
var express_validator_1 = require("express-validator");
//Check Book Data
exports.validateBook = [
    (0, express_validator_1.body)('title').isString().notEmpty().withMessage('Title is required and should be a string'),
    (0, express_validator_1.body)('published_date').isISO8601().withMessage('Published date is required and should be a valid date'),
    (0, express_validator_1.body)('author_id').isInt().withMessage('Author ID is required and should be an integer'),
];
