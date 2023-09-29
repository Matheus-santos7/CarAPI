const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {

            db.query('SELECT * FROM carros', (erro, resuts) => {
                if (erro) {rejeitado(error); return; }
                aceito(resuts);
            });
        });
    }  
}; 
