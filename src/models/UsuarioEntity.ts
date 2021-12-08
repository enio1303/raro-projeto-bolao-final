import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Aposta } from "./ApostaEntity";
import { Campeonato } from "./CampeonatoEntity";
import { Endereco } from "./EnderecoEntity";

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({length: 50, nullable: true})
  nome: string;

  @Column({ unique: true })
  email: string;
  
  @Column({length: 300, nullable: true})
  hashSenha: string;

  @OneToOne(() => Endereco, endereco => endereco.usuario)
  endereco: Endereco;
    
  @OneToMany(() => Aposta, aposta => aposta.usuario)
  apostas: Aposta[];

  @ManyToMany(() => Campeonato, campeonato => campeonato.usuarios)
  campeonatos: Campeonato[];
}
