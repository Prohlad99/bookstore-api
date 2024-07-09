import db from '../database/knex';

export interface Book {
  id?: number;
  title: string;
  description?: string;
  published_date: string;
  author_id: number;
}

//Get All Books
const getAllBooks = async (page: number, limit: number, search?: string): Promise<Book[]> => {
  const offset = (page - 1) * limit;
  let query = db('books').select('*').limit(limit).offset(offset);

  if (search) {
    query = query.where('title', 'like', `%${search}%`);
  }

  return query;
};

//Get Book By ID
const getBookById = async (id: number): Promise<Book> => {
  return db('books').where({ id }).first();
};

//Create Book
const createBook = async (book: Book): Promise<number[]> => {
  return db('books').insert(book);
};

//Update Book By ID
const updateBook = async (id: number, book: Book): Promise<number> => {
  return db('books').where({ id }).update(book);
};

//Delete Book By ID
const deleteBook = async (id: number): Promise<number> => {
  return db('books').where({ id }).del();
};

//Get Books By Author ID
const getBooksByAuthorId = async (author_id: number): Promise<Book[]> => {
  return db('books').where({ author_id }).select('*');
};


// Retrieves the total number of books optionally filtered by title.
// @param search Optional search string to filter authors by name.
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
