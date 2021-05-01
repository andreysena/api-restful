/**
 * 
 * Arquivo: routes/index.js
 * Data: 07/04/2021
 * Descrição: Arquivo responsável por manipular as rotas dos endpoints da API.
 * Autor: Andrey Sena (Acompanhando o Workshop da Glaucia Lemos)
 *  
 */

import express from 'express';
import config from '../config';
import middleware from '../middleware';
import initDB from '../../db';
import restaurante from '../controller/restauranteController.js';

let router = express();

// Conexão com a base de dados:
initDB(db => {
    // Usaremos m middleware interno:
    router.use(middleware({ config, db }));

    // Aqui serão adicionadas as v1 ('/v1')
    router.use('/restaurante', restaurante({ config, db }));
})

export default router;