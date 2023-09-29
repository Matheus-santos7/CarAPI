const CarroService = require('../services/CarroService');

module.exports = {

    buscarTodos: async (req, res) => {
        let json = { error: '', result: [] }; // Inicializa um objeto JSON para armazenar o resultado e possíveis erros
    
        let carros = await CarroService.buscarTodos(); // Chama a função assíncrona para buscar informações sobre carros
    
        for (let i in carros) {
            // Itera sobre os carros obtidos
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            }); // Adiciona informações do carro ao resultado JSON
        }
        res.json(json); // Envia a resposta no formato JSON com os resultados da busca
    },

    buscarUm: async (req, res) => {
        // Declaração de uma função assíncrona chamada buscarUm que aceita dois parâmetros: req (requisição) e res (resposta)
        let json = {error:'', result:{}}; // Inicializa um objeto JSON para armazenar o resultado e possíveis erros
        
        let codigo = req.params.codigo; // Obtém o código do carro a ser buscado a partir dos parâmetros da requisição
        let carro = await CarroService.buscarUm(codigo); // Chama a função assíncrona para buscar um carro pelo código
        
        if (carro) {
            // Se um carro foi encontrado com o código fornecido, atualiza o resultado no objeto JSON
            json.result = carro;
        }
        res.json(json); // Envia a resposta no formato JSON com os resultados da busca
    }
    
    

}