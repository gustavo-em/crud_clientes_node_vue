import { Router } from "express";
import { authRouter } from "./auth.routes";
import { clientesRouter } from "./clientes.routes";
import { usuarioRouter } from "./usuario.routes";

const router = Router();




router.use('/auth', authRouter)
router.use('/usuario', usuarioRouter)
router.use('/cliente', clientesRouter)

export { router }


