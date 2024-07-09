"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knexConfig = require('../../knexfile');
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var environment = process.env.NODE_ENV || 'development';
var config = knexConfig[environment];
var db = (0, knex_1.default)(config);
exports.default = db;
