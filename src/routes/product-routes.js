const express = require('express');
var router = express.Router(); //interceptação das rotas.

var Produto = require("../app/models/product");

router
    .post("/", function (req, res) {
        var produto = new Produto();
        produto.nome = req.body.nome;
        produto.preco = req.body.preco;
        produto.descricao = req.body.descricao;

        produto.save(function (error) {
            if (error)
                res.send("Erro ao tentar salvar produto" + error);

            res.status(201).json({ message: 'Produto inserido com sucesso' });
        });
    });

router
    .get('/:productId', function (req, res) {
        const id = req.params.productId;

        Produto.findById(id, function (err, produto) {
            if (err) {
                res.status(500).json(
                    { message: "Erro ao encontrar produto, ID mal formado" }
                );
            }

            else if (produto == null) {
                res.status(400).json({
                    message: "produto não encontrado para o ID passado"
                });
            } else {
                res.status(200).json({
                    message: "Produto encontrado com sucesso",
                    produto: produto
                });
            }
        });
    });

router.get("/", function (req, res) {
        Produto.find(function (err, prods) {
            if (err)
                res.send(err);

            res.status(200).json({
                message: "produtos retornados",
                produtos: prods
            });
        });
    })

module.exports = router;
