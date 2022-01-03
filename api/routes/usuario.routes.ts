// import { PostUsuarioController } from './../modules/usuarios/postUsuario/PostUsuarioController';
import { Request, Response } from "express";
import { PostUsuarioController } from "../modules/usuarios/postUsuario/postUsuarioController";


let usuarioController = new PostUsuarioController()


let express = require('express')
let usuarioRouter = express.Router();




usuarioRouter.post('/novo', usuarioController.executar)


export { usuarioRouter }