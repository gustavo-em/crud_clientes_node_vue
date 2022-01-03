import { GetClientesUsuario } from './../modules/clientes/getClientesUsuario/GetClientesUsuario';
import jwt from 'jsonwebtoken';
import { Clientes } from './../entities/Clientes';
import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validar_jwt_passar_user_req, verifyTokenHeader } from './middlewares';
import { PostClienteController } from '../modules/clientes/postCliente/PostClienteController';


const express = require('express')
let clientesRouter = express.Router()


clientesRouter.post('/novo', verifyTokenHeader, validar_jwt_passar_user_req, new PostClienteController().executar)


clientesRouter.get('/todos', verifyTokenHeader, validar_jwt_passar_user_req, new GetClientesUsuario().executar)

export { clientesRouter } 