import { Usuarios } from '../../../entities/Usuarios';
import { getRepository } from 'typeorm';
async function pegar_usuario_email_senha(email: string, senha: string) {
    const userRepo = await getRepository(Usuarios)
    let user = await userRepo.find({
        where: { email: email, senha: senha }
    })

    if (!user || user.length === 0) {
        return false
    }

    return user;

}

export { pegar_usuario_email_senha }