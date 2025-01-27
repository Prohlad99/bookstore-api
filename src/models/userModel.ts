import db from '../database/knex';

export interface User {
  id?: number;
  email: string;
  password: string;
}

//Login User
export const getUserByEmail = async (email: string): Promise<User | undefined> => {
  return db('users').where({ email }).first();
};

//Register User
export const createUser = async (user: User): Promise<number[]> => {
  return db('users').insert(user);
};
