import { Sequelize, Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 100],
              msg: 'O nome deve ter entre 3 e 100 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'O email ja existe',
          },
          validate: {
            isEmail: {
              msg: 'O e-mail não é um e-mail válido',
            },
          },
        },
        senha_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        senha: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      {
        sequelize,
      },
    );

    this.addHook('beforeSave', async (user) => {
      if (user.passoword) {
        user.senha_hash = await bcryptjs.hash(user.senha, 8);
      }
    });
    return this;
  }

  passowordIsValid(passoword) {
    return bcryptjs.compare(passoword, this.senha_hash);
  }
}
