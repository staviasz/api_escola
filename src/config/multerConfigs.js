import multer from 'multer';
import { extname, resolve } from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => { // filtra o tipo de flie recebido
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') { // condicional para garantir que estamos recebendo a extenção correta
      return cb(new multer.MulterError('O arquivo precisa ser png ou jpg.'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
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
