import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
    res.json({pong: true});
}

export const random = (req: Request, res: Response) => {
    let nRandom: number = Math.floor(Math.random() * 10);
    res.json({number: nRandom});
}

export const name = (req: Request, res: Response) => {
    res.json({name: `Informação recebida: ${req.params.name}`});
}