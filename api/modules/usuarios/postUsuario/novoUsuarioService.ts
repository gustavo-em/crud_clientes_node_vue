import { getRepository } from 'typeorm';
import { Usuarios } from '../../../entities/Usuarios';
async function novoUsuarioService(email: string, senha: string) {


    let usuarioRepo = await getRepository(Usuarios)
    let usuarioPCriar = await usuarioRepo.create({ email, senha })
    let usuarioCriado = await usuarioRepo.save(usuarioPCriar)

    return usuarioCriado

}


export { novoUsuarioService } 