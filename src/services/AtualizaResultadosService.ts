import { Service } from "typedi";
import { AtualizaResultadosDTO } from "../@types/dto/AtualizaResultadosDto";
import { IAtualizaResultadosService } from "../@types/services/IAtualizaResultadosService";

@Service('AtualizaResultadosService')
export class AtualizaResultadosService implements IAtualizaResultadosService {

  async atualizar() {
    const atualizaResultados: AtualizaResultadosDTO = { msg: "Resultados atualizados com sucesso."}
    return atualizaResultados;
  }
}
