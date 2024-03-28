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

/* 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.
*/
app.post('/exercicio7', (req, res) => {
console.log(req.body)

let listaProdutos = []
console.log(listaProdutos)

req.body.forEach(produto => {
    listaProdutos.push(produto)
});

let maiorPreco = 0
listaProdutos.forEach(produto => {
    console.log( 'preço do produto:' + produto.preco)
    if (produto.preco > maiorPreco ){
        maiorPreco = produto.preco
        console.log("Maior preço: " + maiorPreco)
    }
})

let somaDosprecos = 0
listaProdutos.forEach(produto => {
    somaDosprecos = somaDosprecos + produto.preco
    console.log("soma dos preços: " + somaDosprecos)
})

let media = somaDosprecos/listaProdutos.length
// resposta:
res.json({
    maiorPreco: maiorPreco,
    media : media
})
})

app.listen(port, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
 })