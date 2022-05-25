import { Request, Response } from "express";

import { Frases } from "../models/Frases";

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

export const addFrases = async (req: Request, res: Response) => {
    let { author, text } = req.body;
    let newFrase = await Frases.create({ author, text });
    res.json({id: newFrase.id, author, text});
}