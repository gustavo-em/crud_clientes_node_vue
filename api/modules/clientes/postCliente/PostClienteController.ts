import { Request, Response } from "express";
import { salvar_cliente } from "./salvar_cliente";

export class PostClienteController {
    async executar(req: Request, res: Response) {
        const { nome } = req.body
        let usuario_id = req['usuario'].id
        let cliente_ou_false = await salvar_cliente(nome, usuario_id)
        if (!cliente_ou_false) {
            return res.status(400).json({ msg: 'Houve um erro ao salvar o cliente' })
        }

        return res.status(201).json({ cliente_ou_false })

    }
}