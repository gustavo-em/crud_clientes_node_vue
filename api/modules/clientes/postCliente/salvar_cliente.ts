import { Clientes } from '../../../entities/Clientes';
import { getRepository } from 'typeorm';

export async function salvar_cliente(nome: string, id_usuario: string) {
    let clienteRepo = getRepository(Clientes)

    try {

        let clienteSalvando = clienteRepo.create({ nome })
        clienteSalvando.usuario = id_usuario
        let clienteSalvo = await clienteRepo.save(clienteSalvando)
        return clienteSalvo
    } catch (err) {
        return false
    }

}