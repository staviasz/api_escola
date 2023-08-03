"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    if (!email || !password) {
      return res.status(401).json({ error: ['Credenciais inválidas'] });
    }

    const user = await _UserModel2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: ['Usuário não existe'] });
    }

    if (!(await user.passowordIsValid(password))) {
      return res.status(401).json({ error: ['Senha inválida'] });
    }

    const { id, nome } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      user: {
        id, nome, email, password,
      },
    });
  }
}

exports. default = new TokenController();
