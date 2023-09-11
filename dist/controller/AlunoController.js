"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _AlunoModel = require('../models/AlunoModel'); var _AlunoModel2 = _interopRequireDefault(_AlunoModel);
var _ImageModel = require('../models/ImageModel'); var _ImageModel2 = _interopRequireDefault(_ImageModel);

class AlunoController {
  async index(req, res) {
    const alunos = await _AlunoModel2.default.findAll({
      attributes: [
        'id',
        'nome',
        'sobrenome',
        'email',
        'idade',
        'peso',
        'altura',
      ],
      order: [
        ['id', 'DESC'],
        [_ImageModel2.default, 'id', 'DESC'],
      ],
      include: {
        model: _ImageModel2.default,
        attributes: ['cloudinary_url'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try {
      const aluno = await _AlunoModel2.default.create(req.body);
      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id inválido'],
        });
      }

      const aluno = await _AlunoModel2.default.findByPk(req.params.id, {
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'email',
          'idade',
          'peso',
          'altura',
        ],
        order: [
          ['id', 'DESC'],
          [_ImageModel2.default, 'id', 'DESC'],
        ],
        include: {
          model: _ImageModel2.default,
          attributes: ['cloudinary_url'],
        },
      });
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      return res.json({ aluno });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id inválido'],
        });
      }

      const aluno = await _AlunoModel2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoAtualizado = await aluno.update(req.body);

      return res.json({ alunoAtualizado });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id inválido'],
        });
      }

      const aluno = await _AlunoModel2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
      await aluno.destroy();
      return res.json({ error: ['Aluno excluido com sucesso'] });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new AlunoController();
