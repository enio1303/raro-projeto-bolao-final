import { StatusAndamento } from "../../enums/StatusAndamento";

export interface Campeonato {
  id: number;
  nome: string;
  slug: string;
  nome_popular: string;
  status: StatusAndamento;
  logo: string;
}
