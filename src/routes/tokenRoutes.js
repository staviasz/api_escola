import { Router } from 'express';
import TokenController from '../controller/TokenController';

const router = new Router();

router.post('/', TokenController.store);

export default router;
