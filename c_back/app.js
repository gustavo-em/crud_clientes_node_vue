"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const routes_1 = require("./routes");
app.use(routes_1.router);
app.use('/', express_1.default.static(__dirname + '/../c_front'));
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/../c_front/index.html'));
app.listen('3333', () => console.log('Server is running'));
