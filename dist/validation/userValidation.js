"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
var express_validator_1 = require("express-validator");
//Check User Data
exports.validateUser = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Please enter a valid email'),
    (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];
