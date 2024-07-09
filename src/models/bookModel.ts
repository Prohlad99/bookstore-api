import db from '../database/knex';

export interface Book {
  id?: number;
  title: string;
  description?: string;
  published_date: string;
  author_id: number;
}

const getAllBooks = async (page: number, limit: number, search?: string): Promise<Book[]> => {
  const offset = (page - 1) * limit;
  let query = db('books').select('*').limit(limit).offset(offset);

  if (search) {
    query = query.where('title', 'like', `%${search}%`);
  }

  return query;
};

const getBookById = async (id: number): Promise<Book> => {
  return db('books').where({ id }).first();
};

const createBook = async (book: Book): Promise<number[]> => {
  return db('books').insert(book);
};

const updateBook = async (id: number, book: Book): Promise<number> => {
  return db('books').where({ id }).update(book);
};

const deleteBook = async (id: number): Promise<number> => {
  return db('books').where({ id }).del();
};

const getBooksByAuthorId = async (author_id: number): Promise<Book[]> => {
  return db('books').where({ author_id }).select('*');
};

const getBooksCount = async (search?: string): Promise<number> => {
  let query = db('books').count('id as count').first();

  if (search) {
    query = query.where('title', 'like', `%${search}%`);
  }

  const result = await query;
  return result ? parseInt(result.count as string, 10) : 0;
};

export {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthorId,
  getBooksCount
};
