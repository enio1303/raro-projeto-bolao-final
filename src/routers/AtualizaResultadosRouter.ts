import { Router } from 'express';
import Container from 'typedi';
const router = Router();
import { AtualizaResultadosController  } from '../controllers/AtualizaResultadosController';

const getController = (): AtualizaResultadosController => {
  return Container.get<AtualizaResultadosController>('AtualizaResultadosController');
};

const crateRouter = () => {
  router.get('', (req, res) => getController().atualizar(req, res));

  return router;
};

export default crateRouter;
