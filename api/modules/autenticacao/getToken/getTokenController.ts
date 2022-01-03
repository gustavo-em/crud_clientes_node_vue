
import { Request, Response } from "express";
import { pegar_usuario_email_senha } from "./pegar_usuario_email_senha";
import { retonar_token } from "./retornar_token";


export class getTokenController {
    async executar(req: Request, res: Response) {
        const { email, senha } = req.body

        //Verificar se usuario existe
        let usuario_ou_false = await pegar_usuario_email_senha(email, senha)
        if (!usuario_ou_false) {
            return res.status(404).send('usuario nao encontrado')
        }

        //Retornar token  
        let obj_token_ou_err = await retonar_token(usuario_ou_false)

        if (!obj_token_ou_err) {
            return res.status(400).send('algum problema ao gerar o token')
        }
        return res.json(obj_token_ou_err)


    }
}