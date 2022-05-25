import { Router } from "express";

import * as apiController from '../controllers/apiController';

const router = Router();

router.get('/ping', apiController.ping);
router.get('/random', apiController.random);
router.get('/name/:name', apiController.name);

router.post('/frases', apiController.addFrases);
router.get('/frases', apiController.getFrases);
router.get('/frase/:id', apiController.idFrase);

export default router;