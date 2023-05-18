import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';
import homeRouter from './src/routes/homeRoutes';
import userRouter from './src/routes/userRoutes';
import tokenRouter from './src/routes/tokenRoutes';
import alunoRouter from './src/routes/alunoRoutes';
import imageRouter from './src/routes/imageRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRouter);
    this.app.use('/users/', userRouter);
    this.app.use('/tokens/', tokenRouter);
    this.app.use('/alunos/', alunoRouter);
    this.app.use('/images/', imageRouter);
  }
}

export default new App().app;
