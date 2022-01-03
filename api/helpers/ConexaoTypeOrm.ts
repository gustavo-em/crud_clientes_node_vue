import { createConnection } from "typeorm";
import { IConexao } from "./interfaces/IConexao";


export class ConexaoTypeOrm implements IConexao {
    async criarConexao() {
        return await createConnection();

    }
}