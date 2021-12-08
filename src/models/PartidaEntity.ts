import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { StatusAndamento } from "../../@types/enums/StatusAndamento";
import { Aposta } from "./ApostaEntity";
import { Rodada } from "./RodadaEntity";
import { Time } from "./TimeEntity";


@Entity()
export class Partida{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50, nullable: true})
    placar: string;

    @ManyToOne(() => Time, visitante => visitante.partidasMandante)
    mandante: Time;

    @ManyToOne(() => Time, visitante => visitante.partidasVisitante)
    visitante: Time;

    @Column()
    placarMandante: number;

    @Column()
    placarVisitante: number;

    @Column({
        type: 'enum',
        enum: StatusAndamento,
        default: StatusAndamento.Agendada
    })
    status: StatusAndamento;

    @Column({length: 50, nullable: true})
    slug: string;

    @Column()
    dataRealizacao: Date;

    @ManyToOne(() => Rodada, rodada => rodada.partidas)
    rodada: Rodada;

    @OneToMany(() => Aposta, aposta => aposta.partida)
    apostas: Aposta[];

}

