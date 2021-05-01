/**
 * 
 * Arquivo: src/index.js
 * Data: 07/04/2021
 * Descrição: 
 * Autor: Andrey Sena (Acompanhando o Workshop da Glaucia Lemos)
 *  
 */

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

/**
 * Aui iremos importar futuras pastas que iremos criar:
 * Config: configurações do MongoDB
 * Routes: responsável por criar as rotas do nosso endpoint
*/
import config from './config';
import routes from './routes';

let app = express();
app.server = http.createServer(app);

// Middleware:

// Configuração do Parser (application/json)
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Configuração de Autenticação

// Rotas da api -> v1:
app.use('/v1', routes);

app.server.listen(config.port);
console.log(`Aplicação sendo executada na porta ${app.server.address().port}`);

export default app;