//Instalar o node_modules: npm init -y
//Instalar as bibliotecas: npm install express mysql dotenv cors body-parser
//Instalar o nodemon em desenvolvimento: npm install nodemon --save-dev 
//Criar a pasta SRC na raiz do projeto.
//Criar um arquivo para guardar as variaveis de ambiente: variaveis.env
//Criar um arquivo server.js
//Criar um script para reiniciar o servidor sempre automaticamente, no arquivo package.json: "start": "nodemon ./src/server.js"

//Criar um arquivo routes.js: 

//ROUTES.JS:
const express = require('express'); //chamar o express
const routes = express.routes(); //criar a rota e utilizar o express para controlar

module.exports = router; //exportar o router

//SERVER.JS
require('dotenv').config({path: 'varieveis.env'}); //Requisitar a biblioteca dontenv para ler as variaveis dentro do arquivo variaveis.js.
const express = require('express'); //usar o express dentro do arquivo
const cors = require('cors'); //utilizar a biblioteca cors para lidar com as requisicoes do backend e frontend.
const bodyparser = require('bodyparser'); //utilizar a biblioteca body-parser para conseguir converter o body de uma requisicao em varios formatos.

const routes = require('./routes'); //identificando para o servidor onde estaram as rotas. 

server.use(bodyParser.urlencoded({extended: false})); //está configurando um middleware no servidor Express para analisar os corpos das requisições que estão no formato application/x-www-form-urlencoded. Isso é especialmente útil quando você envia dados de um formulário HTML para o servidor.

//Executando o servidor na porta amarzenada no arquivo variaveis.env 
server.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);

});

//Passando um pre-fixo para a API começar sempre com "/api" e depois a rota. (colocar antes de realizar o listen)
server.use('/api', routes);


//Criar a pasta controllers dentro da pasta SRC e criar o arquivo Xcontrollers.js
//Criar const dentro do arquivo ROUTES.js para que o routes consiga acessar o arquivo xcontrollers.js
const carroControllers = require('./controllers/carroController');

//Criar uma pasta services e criar o arquivo Xservices.js para amarzenar todas as regras do banco de dados:
module.exports = {
    
};

//No arquivo XControllers.js criar uma const para o arquivo consiga acessar o arquivo Xservices.js
const CarroService = require('../services/CarroService');

//Criar o banco de dados e as tabelas necessarias
//Criar as variaveis de ambiente para armazenar as config do banco de dados

//VARIAVEIS.ENV
DB_HOST= localhost
DB_USER= root
DB_PASSWORD= 123
DB_NAME= dbApiCarros

//Criar um arquivo db.js dentro da pasta SRC para realizar a conexao com o banco de dados local
//DB.js
const mysql = require('mysql'); //Chamando a biblioteca mysql

const connection = mysql.createConnection //Criar uma const para centralizar e criar a conexao com o banco de dados
({ 
    host: process.env.DB_HOST, //buscando os valores do host no arquivo variaveis.js
    user: process.env.DB_USER, //buscando os valores do user no arquivo variaveis.js
    password: process.env.DB_PASSWORD, //buscando os valores do password no arquivo variaveis.js
    database: process.env.DB_NAME //buscando os valores do banco no arquivo variaveis.js
});

//Criando uma funcao para alerta caso o acesso com o banco nao foi bem sucedido e se nao o error:

//DB.js
connection.conect((error) => { //Se a conexao apresentar error quando chamada ela vai entrar no if abaixo.
    if (error) throw error; //SE a conexao apresentar error ela exibirar no console
    console.log(`Conectado ao Banco de dados ${process.env.DB_NAME}`);// SE NAO ela exibirar no console que foi conectado ao banco de dados referido.
});

module.exports = connection; //exportando a const para poder ser utilizada em todos os arquivos que for requisitado.

//Chamar o arquivo db.js dentro do arquivo Xservices.js para utilizar a conexao com o banco:
//XSERVICES.JS
const db = require('../db');

//PONTO DE POSSIVEIS ERROS: Caso apareca o erro 1251 possivelmente voce configurou o mysql para entrar sem SENHA, basta rodar o seguinte comando dentro do mysql para correção:
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_passoword BY '123';

//Criaçao do endpoint get listar todos os registros

//ROUTES.JS
router.get('/carros', carrController.buscarTodos); //nessa rota passamos o metodo (GET) a rota (/carros) e o arquivo controller e a funçã0 desejada.

//XCONTROLLERS.JS
module.exports = { //Dentro desse module.exports que vai ser armazenado as funcoes das rotas.
    
}



