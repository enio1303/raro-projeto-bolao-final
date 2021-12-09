import { AtualizaResultadosDTO } from "../dto/AtualizaResultadosDto";

export interface IAtualizaResultadosService {
  atualizar(): Promise<AtualizaResultadosDTO>;
}
