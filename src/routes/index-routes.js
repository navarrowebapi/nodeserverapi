const express = require('express');
var router = express.Router(); //interceptação das rotas.

//Middleware
router.use(function (req, res, next) {
    //Aqui poderão ser implementadas rotinas de 
    //LOGs, VALIDAÇÕES, ERROs
    console.log("Interceptação pelo Middleware");
    next();
});

router.get('/',
    (req, res) => res.json({'message': 'rota teste OK'}));

module.exports = router;