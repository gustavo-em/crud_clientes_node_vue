import { Clientes } from './../../../entities/Clientes';
import { getRepository } from 'typeorm';
export async function buscar_clientes_com_usuario(usuario_id: string) {

    const repoClientes = getRepository(Clientes)

    let clientes = await repoClientes.find({
        where: {
            usuario: { id: usuario_id }
        },
        relations: ['usuario']
    })

    if (!clientes) {
        return false
    }

    return clientes


}