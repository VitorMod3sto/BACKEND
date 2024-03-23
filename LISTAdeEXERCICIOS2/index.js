const express = require('express')
const app = express()
const port = 3000

// logica

app.use(express.json())


/*
1. Faça uma api para calcular o estoque médio de uma peça, 
sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

app.post('/exercicio1', (req, res) => {
    const corpo = req.body
    console.log(corpo)

    const estoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) / 2
    const resposta = {
        peca : req.body.peça,
        estoqueMedio: estoqueMedio
    }
    res.json(resposta)
})

app.listen(port, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
 })