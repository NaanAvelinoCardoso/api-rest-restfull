import { Router } from 'express';

const router = Router();

router.get('/ping', (req, res) => {
    res.json({pong: true});
});

router.get('/random', (req, res) => {
    let nRandom: number = Math.floor(Math.random() * 10);
    res.json({number: nRandom});
});

router.get('/name/:name', (req, res) => {
    res.json({name: `Informação recebida: ${req.params.name}`});
});

export default router;