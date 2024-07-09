"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = getAllBooks;
exports.getBookById = getBookById;
exports.createBook = createBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
exports.getBooksByAuthorId = getBooksByAuthorId;
var bookModel = __importStar(require("../models/bookModel"));
var authorModel = __importStar(require("../models/authorModel"));
var express_validator_1 = require("express-validator");
//Get All Books
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var page, limit, search, books, total, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    page = parseInt(req.query.page, 10) || 1;
                    limit = parseInt(req.query.limit, 10) || 10;
                    search = req.query.search;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, bookModel.getAllBooks(page, limit, search)];
                case 2:
                    books = _a.sent();
                    return [4 /*yield*/, bookModel.getBooksCount(search)];
                case 3:
                    total = _a.sent();
                    res.json({
                        data: books,
                        meta: {
                            total: total,
                            page: page,
                            limit: limit,
                            totalPages: Math.ceil(total / limit)
                        }
                    });
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    res.status(500).json({ error: error_1.message });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
//Get Book By ID
function getBookById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var book, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, bookModel.getBookById(Number(req.params.id))];
                case 1:
                    book = _a.sent();
                    if (book) {
                        res.json(book);
                    }
                    else {
                        res.status(404).json({ message: 'Book not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    res.status(500).json({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//Create Book
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, author_id, author, newBook, createdBook, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errors = (0, express_validator_1.validationResult)(req);
                    if (!errors.isEmpty()) {
                        res.status(400).json({ errors: errors.array() });
                        return [2 /*return*/];
                    }
                    author_id = req.body.author_id;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, authorModel.getAuthorById(author_id)];
                case 2:
                    author = _a.sent();
                    if (!author) {
                        res.status(400).json({ error: 'Author ID does not exist' });
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, bookModel.createBook(req.body)];
                case 3:
                    newBook = _a.sent();
                    return [4 /*yield*/, bookModel.getBookById(newBook[0])];
                case 4:
                    createdBook = _a.sent();
                    res.status(201).json(createdBook);
                    return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    res.status(500).json({ error: error_3.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
//Update Book By ID
function updateBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var errors, updated, updatedBook, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errors = (0, express_validator_1.validationResult)(req);
                    if (!errors.isEmpty()) {
                        res.status(400).json({ errors: errors.array() });
                        return [2 /*return*/];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, , 7]);
                    return [4 /*yield*/, bookModel.updateBook(Number(req.params.id), req.body)];
                case 2:
                    updated = _a.sent();
                    if (!updated) return [3 /*break*/, 4];
                    return [4 /*yield*/, bookModel.getBookById(Number(req.params.id))];
                case 3:
                    updatedBook = _a.sent();
                    res.json(updatedBook);
                    return [3 /*break*/, 5];
                case 4:
                    res.status(404).json({ message: 'Book not found' });
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    error_4 = _a.sent();
                    res.status(500).json({ error: error_4.message });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
//Delete Book By ID
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var deleted, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, bookModel.deleteBook(Number(req.params.id))];
                case 1:
                    deleted = _a.sent();
                    if (deleted) {
                        res.json({ message: 'Book deleted' });
                    }
                    else {
                        res.status(404).json({ message: 'Book not found' });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    res.status(500).json({ error: error_5.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
//Get Books By Author
function getBooksByAuthorId(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var books, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, bookModel.getBooksByAuthorId(Number(req.params.id))];
                case 1:
                    books = _a.sent();
                    res.json(books);
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    res.status(500).json({ error: error_6.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
