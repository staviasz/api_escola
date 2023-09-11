import { Router } from 'express';
import multer from 'multer';

import imageController from '../controller/ImageController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/', loginRequired, upload.single('image'), imageController.store);

export default router;
