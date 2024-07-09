import db from '../database/knex';

export interface Author {
  id?: number;
  name: string;
  bio?: string;
  birthdate: string;
}

const getAllAuthors = async (page: number, limit: number, search?: string): Promise<Author[]> => {
  const offset = (page - 1) * limit;
  let query = db('authors').select('*').limit(limit).offset(offset);

  if (search) {
    query = query.where('name', 'like', `%${search}%`);
  }

  return query;
};

const getAuthorById = async (id: number): Promise<Author> => {
  return db('authors').where({ id }).first();
};

const createAuthor = async (author: Author): Promise<number> => {
  const [id] = await db('authors').insert(author);
  return id; // Return the ID of the newly created author
};

const updateAuthor = async (id: number, author: Author): Promise<number> => {
  return db('authors').where({ id }).update(author);
};

const deleteAuthor = async (id: number): Promise<number> => {
  return db('authors').where({ id }).del();
};

const getAuthorsCount = async (search?: string): Promise<number> => {
  let query = db('authors').count('id as count').first();

  if (search) {
    query = query.where('name', 'like', `%${search}%`);
  }

  const result = await query;
  return result ? parseInt(result.count as string, 10) : 0;
};

export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getAuthorsCount
};
