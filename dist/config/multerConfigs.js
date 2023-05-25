"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path');

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

exports. default = {
  fileFilter: (req, file, cb) => { // filtra o tipo de flie recebido
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') { // condicional para garantir que estamos recebendo a extenção correta
      return cb(new _multer2.default.MulterError('O arquivo precisa ser png ou jpg.'));
    }

    return cb(null, true);
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${_path.extname.call(void 0, file.originalname)}`);
    },
  }),
};

// filename: (req, file, cb) => {
//   cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
// },
// * utiliza-se o Date.now() para pois é muito dificil receber arquivos
//   em um mesmo milisegundo(a não ser que vc seja o facebook)
// * a função "aleatorio" foi criada pensando no caso de receber duas
//    imagens ao mesmo tempo garantindo assim que seja unica
// * o extname serve para recuperar a exteção do arquivo original(file.originalname)
