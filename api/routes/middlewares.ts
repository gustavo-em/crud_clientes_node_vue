import { hash_jwt } from './../modules/autenticacao/getToken/hash_jwt';
import { Request, Response } from "express"

import jwt from 'jsonwebtoken'

function verifyTokenHeader(req: Request, res: Response, next) {

    const token = req.headers['autorization']

    if (!token) {
        //return res.redirect('/entrar')
        return res.send('No token on header')
    }

    const tokenOnly = token.split(" ")[1]

    req['token'] = tokenOnly

    next()

}

//Passar sessao do usuario a partir 
function validar_jwt_passar_user_req(req: Request, res: Response, next) {
    let token = req['token']

    let tokenVerificado;
    try {

        tokenVerificado = jwt.verify(token, hash_jwt, { complete: true })
    } catch (err) {
        return res.status(400).json({ msg: "erro ao validar token", erro: err })
    }

    req['usuario'] = tokenVerificado.payload

    next()

}



export { verifyTokenHeader, validar_jwt_passar_user_req }