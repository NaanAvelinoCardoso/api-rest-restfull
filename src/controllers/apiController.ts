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
    res.status(201);
    res.json({id: newFrase.id, author, text});
}

export const getFrases = async (req: Request, res: Response) => {
    let list = await Frases.findAll();
    res.json({ list });
}

export const idFrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let frase = await Frases.findByPk(id);

    if(frase) {
        res.status(200);
        res.json({ frase });
    } else {
        res.status(404);
        res.json({error: 'frase näo encontrada!'});
    }
}

export const updateFrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    let { author, text } = req.body;

    let frase = await Frases.findByPk(id);
    if(frase) {
        frase.author = author;
        frase.text = text;
        await frase.save();
        
        res.status(200);
        res.json({ frase });
    } else {
        res.status(404);
        res.json({ error: 'Frase näo encontrada!' });
    }
}

export const deleteFrase = async (req: Request, res: Response) => {
    let { id } = req.params;
    await Frases.destroy({ where: { id } });
    res.json({});
}