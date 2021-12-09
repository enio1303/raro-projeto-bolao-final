import { StatusAndamento } from "../../enums/StatusAndamento";
import { Time } from "./Time";

export interface Partida {
  partida_id: number;
  placar: string;
  time_mandante: Time;
  time_visitante: Time;
  placar_mandante: number;
  placar_visitante: number;
  status: StatusAndamento;
  slug: string;
  data_realizacao: string;
  hora_realizacao: string;
  data_realizacao_iso: string;
}
