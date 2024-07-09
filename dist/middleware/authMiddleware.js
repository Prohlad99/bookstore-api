"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateJWT = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var secretKey = process.env.JWT_SECRET || 'your-secret-key';
var authenticateJWT = function (req, res, next) {
    var _a;
    var token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Access denied, no token provided' });
    }
    try {
        var decoded = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = decoded;
        next();
    }
    catch (error) {
        res.status(400).json({ error: 'Invalid token' });
    }
};
exports.authenticateJWT = authenticateJWT;
