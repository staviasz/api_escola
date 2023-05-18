import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            isEmail: {
              msg: 'E-mail inválido',
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: 'Idade precisar ser um numero inteiro.',
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: 0,
          validate: {
            isFloat: {
              msg: 'Digite um valor numerico.',
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: 0,
          validate: {
            isFloat: {
              msg: 'Digite um valor numerico.',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'aluno_id' });
  }
}
