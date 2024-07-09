"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authController_1 = require("../controllers/authController");
var userValidation_1 = require("../validation/userValidation");
var validationMiddleware_1 = require("../middleware/validationMiddleware");
//User Routes
var router = express_1.default.Router();
router.post('/register', userValidation_1.validateUser, validationMiddleware_1.validationResultMiddleware, authController_1.register);
router.post('/login', authController_1.login);
exports.default = router;
