const db = require('../db');

module.exports = {
    buscarTodos: () => {
        // Retorna uma promessa que encapsula a operação de busca de todos os carros no banco de dados
        return new Promise((aceito, rejeitado) => {
            // Usa uma função assíncrona para executar uma consulta SQL para buscar todos os carros
            db.query('SELECT * FROM carros', (error, results) => {
                // Se ocorrer um erro durante a consulta, rejeita a promessa e retorna o erro
                if (error) {
                    rejeitado(error);
                    return;
                }
                // Se a consulta for bem-sucedida, aceita a promessa e retorna os resultados
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        // Retorna uma promessa que encapsula a operação de buscar um carro pelo código no banco de dados
        return new Promise((aceito, rejeitado) => {
            // Utiliza uma função assíncrona para executar uma consulta SQL para buscar um carro pelo código
            db.query('SELECT * FROM carros WHERE codigo = ? ',[codigo], (error, results) => {
                // Se ocorrer um erro durante a consulta, rejeita a promessa e retorna o erro
                if (error) {
                    rejeitado(error);
                    return;
                }
                // Se a consulta for bem-sucedida e retornar resultados, aceita a promessa e retorna o primeiro resultado
                if (results.length > 0) {
                    aceito(results[0]);
                } else {
                    // Se a consulta não retornar resultados, aceita a promessa e retorna false para indicar que não há carro com o código fornecido
                    aceito(false);   
                }
            });
        });
    },
    
};

