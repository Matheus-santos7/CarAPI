require('dotenv').config({path: 'variaveis.env'});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false})); 

server.use('/api', routes);

server.listen(process.env.PORT, ()=> {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);

});