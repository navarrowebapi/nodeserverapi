import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//Configuração do server para usar body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Definindo a porta via arquivo de configuração
var port = process.env.port || 3000;

//Definindo Rotas
var router = express.Router();//intercepta todas as rotas.

//Middleware
router.use(function (req, res, next) {
    //Aqui poderão ser implementadas rotinas de 
    //LOGs, VALIDAÇÕES, ERROs
    console.log("Interceptação pelo Middleware");
    next();
});

router.get('/',
    (req, res) => res.json({'message': 'rota teste OK'}));

//Vincular a aplicacao (app) com o motor de rotas
app.use('/api', router);

app.listen(port, () => {
    console.log('Server up and running!');

});

