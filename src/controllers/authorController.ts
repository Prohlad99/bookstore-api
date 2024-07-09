import { Request, Response } from 'express';
import * as authorModel from '../models/authorModel';
import * as bookModel from '../models/bookModel';
import { validationResult } from 'express-validator';

//Get All Authors
export async function getAllAuthors(req: Request, res: Response): Promise<void> {
    const page = parseInt(req.query.page as string, 10) || 1;
    const limit = parseInt(req.query.limit as string, 10) || 10;
    const search = req.query.search as string;

    try {
        const authors = await authorModel.getAllAuthors(page, limit, search);
        const total = await authorModel.getAuthorsCount(search);

        res.json({
            data: authors,
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

//Get Author By ID
export async function getAuthorById(req: Request, res: Response): Promise<void> {
    try {
        const author = await authorModel.getAuthorById(Number(req.params.id));
        if (author) {
            res.json(author);
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

// Create Author
export async function createAuthor(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const newAuthorId = await authorModel.createAuthor(req.body);
        const createdAuthor = await authorModel.getAuthorById(newAuthorId);
        res.status(201).json(createdAuthor);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

//Update Author By ID
export async function updateAuthor(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }

    try {
        const updated = await authorModel.updateAuthor(Number(req.params.id), req.body);
        if (updated) {
            const updatedAuthor = await authorModel.getAuthorById(Number(req.params.id));
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

//Delete Author By ID
export async function deleteAuthor(req: Request, res: Response): Promise<void> {
    try {
        const deleted = await authorModel.deleteAuthor(Number(req.params.id));
        if (deleted) {
            res.json({ message: 'Author deleted' });
        } else {
            res.status(404).json({ message: 'Author not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

// Get Books By Author
export async function getBooksByAuthor(req: Request, res: Response): Promise<void> {
    try {
        const books = await bookModel.getBooksByAuthorId(Number(req.params.id));
        if (books.length > 0) {
            res.json(books);
        } else {
            res.status(404).json({ message: 'No books found for this author' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
