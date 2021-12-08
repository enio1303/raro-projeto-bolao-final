import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./UsuarioEntity";


@Entity()
export class Endereco{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: true})
    cep: string;

    @Column({length: 50, nullable: true})
    logradouro: string;

    @Column({length: 50, nullable: true})
    complemento: string;

    @Column({length: 50, nullable: true})
    numero: string;

    @Column({length: 50, nullable: true})
    bairro: string;

    @Column({length: 50, nullable: true})
    estado: string;

    @OneToOne(() => Usuario, usuario => usuario.endereco)
    @JoinColumn()
    usuario: Usuario;
}