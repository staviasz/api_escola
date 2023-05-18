import multer from 'multer';

import multerConfigs from '../config/multerConfigs';
import Image from '../models/ImageModel';

const upload = multer(multerConfigs).single('image');

class ImageController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: [err.code] });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const image_avatar = await Image.create({
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

export default new ImageController();
