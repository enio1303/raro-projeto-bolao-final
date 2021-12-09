import { Inject, Service } from "typedi";
import {Request, Response} from "express";
import { IAtualizaResultadosService } from "../@types/services/IAtualizaResultadosService";

@Service('AtualizaResultadosController')
export class AtualizaResultadosController {

  constructor(@Inject('AtualizaResultadosService') private  atualizaResultadosService: IAtualizaResultadosService) {}

  async atualizar(request: Request, response: Response) {
    const atualizaResultadoss = await this.atualizaResultadosService.atualizar();
    response.send(atualizaResultadoss);
  }
}
