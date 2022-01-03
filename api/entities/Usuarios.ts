import { Clientes } from './Clientes';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class Usuarios {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    email: string

    @Column()
    senha: string

    @OneToMany(() => Clientes, (clientes) => clientes.usuario)
    clientes: Clientes[]

    @CreateDateColumn()
    criado: Date


}
