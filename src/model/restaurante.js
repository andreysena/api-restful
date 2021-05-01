/**
 * 
 * Arquivo: model/restaurante.js
 * Data: 08/04/2021
 * Descrição: Arquivo responsável pela classe de modelo de Restaurante.
 * Autor: Andrey Sena (Acompanhando o Workshop da Glaucia Lemos)
 *  
 */

import mongoose, { mongo } from 'mongoose'
let Schema = mongoose.Schema

/**
 * 
 * Classe: Restaurante
 * 
 * id (gerado automaticamente pelo MongoDB - GUID)
 *  
 */

let RestauranteSchema = new Schema({
    nome: String,
    endereco: String,
    categoria: String,
    telefone: String
})

export default mongoose.model('restaurante', RestauranteSchema);