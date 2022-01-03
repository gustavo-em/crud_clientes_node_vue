
import { Request, Response } from "express";
import { novoUsuarioService } from './novoUsuarioService';

export class PostUsuarioController {

    constructor() { }

    async executar(req: Request, res: Response) {
        const { email, senha } = req.body

        let usuarioCriado = await novoUsuarioService(email, senha)

        return res.json(usuarioCriado)

    }
}