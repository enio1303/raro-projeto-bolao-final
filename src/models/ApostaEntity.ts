import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Partida } from "./PartidaEntity";
import { Usuario } from "./UsuarioEntity";


@Entity()
export class Aposta {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    placarMandante: number;

    @Column()
    placarVisitante: number;

    @ManyToOne(() => Usuario, usuario => usuario.apostas)
    usuario: Usuario;

    @ManyToOne(() => Partida, partida => partida.apostas)
    partida: Partida;
}