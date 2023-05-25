"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multerConfigs = require('../config/multerConfigs'); var _multerConfigs2 = _interopRequireDefault(_multerConfigs);
var _ImageModel = require('../models/ImageModel'); var _ImageModel2 = _interopRequireDefault(_ImageModel);

const upload = _multer2.default.call(void 0, _multerConfigs2.default).single('image');

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: [err.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const image_avatar = await _ImageModel2.default.create({
          originalname,
          filename,
          aluno_id,
        });

        return res.json(image_avatar);
      } catch (e) {
        return res.status(400).json({ error: [e] });
      }
    });
  }
}

exports. default = new ImageController();
