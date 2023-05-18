import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/AlunoModel';
import User from '../models/UserModel';
import Image from '../models/ImageModel';

const models = [Aluno, User, Image];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
