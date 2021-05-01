/**
 * 
 * Arquivo: controller/restauranteController.js
 * Data: 08/04/2021
 * Descrição: Arquivo responsável por manipular as rotas controllers dos endpoints da API.
 * Autor: Andrey Sena (Acompanhando o Workshop da Glaucia Lemos)
 *  
 */

import { Router } from 'express';
import Restaurante from '../model/restaurante';

export default({ config, db }) => {
    let api = Router();

// 1) Método (POST): Criar Restaurante: 'http://localhost:4000/v1/restaurante/adicionarRestaurante'
    api.post('/adicionarRestaurante', (req, res) => {
        let novoRestaurante = new Restaurante();
    
        // Aqui setaremos os campos do restaurante (via resquest)
        novoRestaurante.nome = req.body.nome;
        novoRestaurante.endereco = req.body.endereco;
        novoRestaurante.categoria = req.body.categoria;
        novoRestaurante.telefone = req.body.telefone;
    
        novoRestaurante.save(error => {
            if (error)
                res.send('Erro ao tentar salvar o restaurante...: ' + error);
    
            res.json({ message: 'Restaurante adicionado com sucesso!' });
        });
    });

// 2) Método (GET): Selecionar restaurantes: 'http://localhost:4000/v1/restaurante'
    api.get('/', (req, res) => {
        Restaurante.find({}, (error, restaurantes) => {
            if (error){
                res.send('Erro ao selecionar os restaurantes...: ' + error);
            }

            res.json(restaurantes);
        });
    });

// 3) Método (GET): Selecionar restaurante por id: 'http://localhost:4000/v1/restaurante/:id'
    api.get('/:id', (req, res) => {
        Restaurante.findById(req.params.id, (error, restaurante) => {
            if (error){
                res.send('Erro ao selecionar o restaurante específico...: ' + error);
            }

            res.json(restaurante);
        });
    });

// 4) Método (PUT): Atualizar restaurante por id: 'http://localhost:4000/v1/restaurante/atualizar/:id'
    api.put('/atualizar/:id', (req, res) => {
        Restaurante.findById(req.params.id, (error, restaurante) => {
            if (error){
                res.send('Error ao selecionar o restaurante específico');
            }

            restaurante.nome = req.body.nome;
            restaurante.endereco = req.body.endereco;
            restaurante.categoria = req.body.categoria;
            restaurante.telefone = req.body.telefone;

            restaurante.save(error => {
                if (error){
                    res.send('Error ao tentar atualizar o restaurante específico...: ' + error);
                }

                res.json({massage: 'Restaurante atualizado com sucesso!'})
            });
        });
    });

// 5)Método (DELETE): Deletar restaurante por id: 'http://localhost:4000/v1/restaurante/delete/:id'
    api.delete('/delete/:id', (req, res) => {
        Restaurante.deleteOne({"_id": req.params.id}, (error) => {
            if (error){
                res.send('Erro ao tentar excluir o restaurante específico...: ' + error);
            }

            res.json({message: 'Restaurante excluído com sucesso!'});
        });
    });

    return api;
}