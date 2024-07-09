"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationResultMiddleware = validationResultMiddleware;
var express_validator_1 = require("express-validator");
function validationResultMiddleware(req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    next();
}
