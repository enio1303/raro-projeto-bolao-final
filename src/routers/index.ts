import * as express from 'express';
import createUserRouter from './userRouter';
import createEnderecoRouter from './enderecoRouter';
import createAtualizaResultadosRouter from './atualizaResultadosRouter';

const createRouters = (app: express.Express) => {
  app.use('/users', createUserRouter());
  app.use('/enderecos', createEnderecoRouter());
  app.use('/atualizaresultados', createAtualizaResultadosRouter());

};

export default createRouters;
