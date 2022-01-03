import { Request, Response } from "express";
import { buscar_clientes_com_usuario } from "./buscar_clientes_com_usuario";

export class GetClientesUsuario {
    async executar(req: Request, res: Response) {
        const usuario_id = req['usuario'].id

        let clientes = await buscar_clientes_com_usuario(usuario_id)
        if (!clientes || clientes.length === 0) {
            return res.status(404).json({ msg: "Não encontrou clientes ou ocorreu erro" })
        }
        return res.status(200).json({ clientes })
    }
}