"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const usuario_routes_1 = require("./usuario.routes");
router.use('/teste', usuario_routes_1.usuarioRouter);
