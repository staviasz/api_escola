import { Router } from 'express';

import imageController from '../controller/ImageController';

const router = new Router();

router.post('/', imageController.store);

export default router;
