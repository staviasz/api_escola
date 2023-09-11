/* eslint-disable consistent-return */
import cloudinary from '../config/cloudinary';
import Image from '../models/ImageModel';

class ImageController {
  store(req, res) {
    if (!req.file) {
      return res.status(400).json({ error: 'Nenhuma imagem fornecida' });
    }
    if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpeg') {
      return res.status(400).json({ error: 'O arquivo precisa ser png ou jpg.' });
    }
    cloudinary.uploader.upload_stream({ resource_type: 'image', folder: 'alunos' }, async (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error uploading image to Cloudinary' });
      }
      const imageUrl = result.secure_url;

      const { originalname } = req.file;
      const { aluno_id } = req.body;
      const image_avatar = await Image.create({
        originalname,
        cloudinary_url: imageUrl,
        aluno_id,
      });

      return res.json(image_avatar);
    }).end(req.file.buffer);
  }
}

export default new ImageController();
