"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable consistent-return */
var _cloudinary = require('../config/cloudinary'); var _cloudinary2 = _interopRequireDefault(_cloudinary);
var _ImageModel = require('../models/ImageModel'); var _ImageModel2 = _interopRequireDefault(_ImageModel);

class ImageController {
  store(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem fornecida' });
    }
    if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg') {
      return res.status(400).json({ error: 'O arquivo precisa ser png ou jpg.' });
    }
    _cloudinary2.default.uploader.upload_stream({ resource_type: 'image', folder: 'alunos' }, async (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
      }
      const imageUrl = result.secure_url;

      const { originalname } = req.file;
      const { aluno_id } = req.body;
      const image_avatar = await _ImageModel2.default.create({
        originalname,
        cloudinary_url: imageUrl,
        aluno_id,
      });

      return res.json(image_avatar);
    }).end(req.file.buffer);
  }
}

exports. default = new ImageController();
