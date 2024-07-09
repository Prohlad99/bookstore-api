import { Request, Response } from 'express';
import * as bookModel from '../models/bookModel';
import * as authorModel from '../models/authorModel';

import { validationResult } from 'express-validator';

export async function getAllBooks(req: Request, res: Response): Promise<void> {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const search = req.query.search as string;

    try {
        const books = await bookModel.getAllBooks(page, limit, search);
        const total = await bookModel.getBooksCount(search);

        res.json({
            data: books,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit)
            }
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function getBookById(req: Request, res: Response): Promise<void> {
    try {
        const book = await bookModel.getBookById(Number(req.params.id));
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function createBook(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    const { author_id } = req.body;

    try {
        const author = await authorModel.getAuthorById(author_id);
        if (!author) {
            res.status(400).json({ error: 'Author ID does not exist' });
            return;
        }

        const newBook = await bookModel.createBook(req.body);
        const createdBook = await bookModel.getBookById(newBook[0]);
        res.status(201).json(createdBook);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function updateBook(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const updated = await bookModel.updateBook(Number(req.params.id), req.body);
        if (updated) {
            const updatedBook = await bookModel.getBookById(Number(req.params.id));
            res.json(updatedBook);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function deleteBook(req: Request, res: Response): Promise<void> {
    try {
        const deleted = await bookModel.deleteBook(Number(req.params.id));
        if (deleted) {
            res.json({ message: 'Book deleted' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export async function getBooksByAuthorId(req: Request, res: Response): Promise<void> {
    try {
        const books = await bookModel.getBooksByAuthorId(Number(req.params.id));
        res.json(books);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
