const express = require('express');
const router = express.Router();

const carroControllers = require('./controllers/carroController');

router.get('/carros', carroControllers.buscarTodos);


module.exports = router;