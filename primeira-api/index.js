// importando modulo do express
const express = require('express')

// cria uma aplicação express
const app = express()

// construir a lógica (o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {
    res.send("João Paulo!")
})

app.post("/teste", (req, res) => {
    res.send("TESTE POST OK!")
})

// CRIE UMA CHAMADA PARA O RECURSO/ALUNO
// DEVOLVA NA RESPOSTA, SEU NOME E MATRÍCULA

app.get("/aluno", (req, res) => {
    res.send("Vitor Alves Modesto, 23114290080")
})

// path param
app.get('/pessoa/:nome/:idade', (req, res) => {
    console.log(req.params)
    const nomePessoa = req.params.nome
    const idadePessoa = req.params.idade

    let mais18 = null

    if(idadePessoa >= 18){
        mais18 = "maior idade"
    }else {
        mais18 = "menor de idade"
    }
    res.send(
    `Olá ${nomePessoa}! Tudo bem?
    Você é ${mais18}`)

})

//QUERY PARAM
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    const nomePessoa = req.query.nome
    const idadePessoa = req.query.idade
})

// startando servidor(backend - api) para escutar comunicações
// na porta 3000
app.listen(3000, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
})

