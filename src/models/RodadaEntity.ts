import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StatusAndamento } from "../@types/enums/StatusAndamento";
import { Campeonato } from "./CampeonatoEntity";
import { Partida } from "./PartidaEntity";


@Entity()
export class Rodada{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: true})
    nome: string;

    @Column({length: 50, nullable: true})
    slug: string;

    @Column()
    rodada: number;

    @Column({
        type: 'enum',
        enum: StatusAndamento,
        default: StatusAndamento.Agendada
    })
    status: StatusAndamento;

    @ManyToOne(() => Campeonato, campeonato => campeonato.rodadas)
    campeonato: Campeonato;

    @OneToMany(() => Partida, partida => partida.rodada)
    partidas: Partida[];
}
