import db from '../database/knex';

export interface Author {
  id?: number;
  name: string;
  bio?: string;
  birthdate: string;
}

//Get All Authors
const getAllAuthors = async (page: number, limit: number, search?: string): Promise<Author[]> => {
  const offset = (page - 1) * limit;
  let query = db('authors').select('*').limit(limit).offset(offset);

  if (search) {
    query = query.where('name', 'like', `%${search}%`);
  }

  return query;
};

//Get Author By ID
const getAuthorById = async (id: number): Promise<Author> => {
  return db('authors').where({ id }).first();
};

//Create Author
const createAuthor = async (author: Author): Promise<number> => {
  const [id] = await db('authors').insert(author);
  return id; 
};
 
//Update Author By ID
const updateAuthor = async (id: number, author: Author): Promise<number> => {
  return db('authors').where({ id }).update(author);
};

//Delete Author By ID
const deleteAuthor = async (id: number): Promise<number> => {
  return db('authors').where({ id }).del();
};

// Retrieves the total number of authors optionally filtered by name.
// @param search Optional search string to filter authors by name.
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
