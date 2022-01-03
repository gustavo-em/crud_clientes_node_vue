import { Usuarios } from './Usuarios';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('clientes')
export class Clientes {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @ManyToOne(() => Usuarios, (usuario) => usuario.clientes)
    usuario: string;

    @Column()
    nome: string
}
