"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioRouter = void 0;
let express = require('express');
let usuarioRouter = express.Router();
exports.usuarioRouter = usuarioRouter;
usuarioRouter.get('/', function (req, res) {
    return res.send('ola1');
});
