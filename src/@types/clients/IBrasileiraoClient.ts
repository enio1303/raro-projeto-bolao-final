import { EnderecoDto } from "../dto/EnderecoDto";

export interface IBrasileiraoClient {
  buscaTabelaBrasileirao(campeonato: number): Promise<any>;
  buscaRodadas(campeonato: number): Promise<any>;
  buscaRodadaDetalhada(campeonato: number, rodada: number): Promise<any>;
}
