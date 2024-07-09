import express from 'express';
import {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv';
import authorRoutes from './routes/authorRoutes';
import bookRoutes from './routes/bookRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

declare global {
  namespace Express {
      interface Request {
          user?: any; 
      }
  }
}
const app = express();

app.use(express.json());

app.use('/api/authors', authorRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/auth', authRoutes);


app.use((err:any, req:Request, res:Response, next:NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error!');
});

export default app;
