//clientes/

import { IBrasileiraoClient } from "../@types/clients/IBrasileiraoClient";
import axios from "axios";
import * as dotenv from "dotenv";
import { Inject, Service } from "typedi";
import { HttpClient } from "infra/http/types/HttpClient";
dotenv.config();



@Service('BrasileiraoClient')
export default class BrasileiraoClient implements IBrasileiraoClient {
  private mainWebApiUrl = process.env.CAMPEONATO_URL_API;
  private tokenStr = process.env.CAMPEONATO_TOKEN;

  async buscaTabelaBrasileirao(campeonato: number): Promise<any> {
    const webApiUrl = `${this.mainWebApiUrl}/${campeonato}/tabela`;
    const response = await axios.get(webApiUrl, {
      headers: { Authorization: `Bearer ${this.tokenStr}` },
    });
    return response.data;
  }
  async buscaRodadas(campeonato: number): Promise<any> {
    const webApiUrl = `${this.mainWebApiUrl}/${campeonato}/rodadas`;
    const response = await axios.get(webApiUrl, {
      headers: { Authorization: `Bearer ${this.tokenStr}` },
    });
    return response.data;  }
  async buscaRodadaDetalhada(campeonato: number, rodada: number): Promise<any> {
    const webApiUrl = `${this.mainWebApiUrl}/${campeonato}//rodadas/${rodada}`;
    const response = await axios.get(webApiUrl, {
      headers: { Authorization: `Bearer ${this.tokenStr}` },
    });
    return response.data;
  }
}
