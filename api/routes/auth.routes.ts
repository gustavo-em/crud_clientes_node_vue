import { getTokenController } from './../modules/autenticacao/getToken/getTokenController';

let express = require('express')
let authRouter = express.Router();



authRouter.post('/login', new getTokenController().executar)




export { authRouter }