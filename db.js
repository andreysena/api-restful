/**
 * 
 * Arquivo: db.js
 * Data: 07/04/2021
 * Descrição: Arquivo responsável por manipular a configuração da base de dados (MOngoDB)
 * Autor: Andrey Sena (Acompanhando o Workshop da Glaucia Lemos)
 *  
 */

import mongoose from 'mongoose';
import config from './src/config';

export default callback => {
    let db = mongoose.connect(config.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true});
    callback(db);
}