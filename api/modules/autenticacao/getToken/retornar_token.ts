import { hash_jwt } from './hash_jwt';
import { Usuarios } from '../../../entities/Usuarios';
import jwt from 'jsonwebtoken'



export async function retonar_token(usuario: Usuarios[]) {
    let { id, email } = usuario[0]

    try {
        let token = jwt.sign({ id, email }, hash_jwt)
        return token
    } catch (err) {
        return err
    }

}