"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize.Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 100],
              msg: 'O nome deve ter entre 3 e 100 caracteres',
            },
          },
        },
        email: {
          type: _sequelize.Sequelize.STRING,
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
          type: _sequelize.Sequelize.STRING,
          defaultValue: '',
        },
        senha: {
          type: _sequelize.Sequelize.VIRTUAL,
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
      if (user.senha) {
        user.senha_hash = await _bcryptjs2.default.hash(user.senha, 8);
      }
    });
    return this;
  }

  passowordIsValid(passoword) {
    return _bcryptjs2.default.compare(passoword, this.senha_hash);
  }
} exports.default = User;
