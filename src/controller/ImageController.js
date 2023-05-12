import multer from 'multer';

import multerConfigs from '../config/multerConfigs';

const upload = multer(multerConfigs).single('image');

class ImageController {
  async store(req, res) {
    return upload(req, res, (err) => {
      if (err) {
        return res.status(400).json({ error: [err.code] });
      }
      return res.json(req.file);
    });
  }
}

export default new ImageController();
