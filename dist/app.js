"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var authorRoutes_1 = __importDefault(require("./routes/authorRoutes"));
var bookRoutes_1 = __importDefault(require("./routes/bookRoutes"));
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
//Routes
app.use('/api/authors', authorRoutes_1.default);
app.use('/api/books', bookRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
//Handle Mismatch Routes
app.use(function (req, res, next) {
    res.status(404).json({ message: 'Route not found' });
});
//Handle Unexpected Errors
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Internal Server Error!');
});
exports.default = app;
