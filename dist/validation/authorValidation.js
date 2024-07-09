"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthor = void 0;
var express_validator_1 = require("express-validator");
//Check Author Data
exports.validateAuthor = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required and should be a string'),
    (0, express_validator_1.body)('birthdate').isISO8601().withMessage('Birthdate is required and should be a valid date'),
];
