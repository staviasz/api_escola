"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _UserModel = require('../models/UserModel'); var _UserModel2 = _interopRequireDefault(_UserModel);

class UserController {
  async store(req, res) {
    try {
      const novoUser = await _UserModel2.default.create(req.body);
      const {
        id,
        nome,
        email,
      } = novoUser;

      return res.json({
        user: {
          id, nome, email,
        },
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index
  async index(req, res) {
    try {
      const users = await _UserModel2.default.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // show
  async show(req, res) {
    try {
      const user = await _UserModel2.default.findByPk(req.params.id);
      const {
        id, nome, email, senha_hash,
      } = user;
      return res.json({
        id, nome, email, senha_hash,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await _UserModel2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await _UserModel2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado'],
        });
      }
      await user.destroy();
      return res.json({
        message: 'Usuário deletado com sucesso',
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
