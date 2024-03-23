// importando modulo do express
const express = require('express')

// cria uma aplicação express
const app = express()

// intermediadores
// IMPRIMIR DATA DE QUANDO FOI FEITO A RESQUISIÇÃO
app.use((req, res, next) => {
    const data = new Date().toISOString()
    console.log(`Data: ${data}`)
    next()
})

// configurando intermediadores que transforma o corpo (no postman) em requisição Json
app.use(express.json())

// construir a lógica (o contrato da minha api)
app.get("/hello", (req, res) => {
    res.send("Hello World!")
})

app.get("/nome", (req, res) => {
    res.send("João Paulo!")
})

// usando post no body do postman pra receber resposta do usuário
app.post("/nome", (req, res) => {
 console.log(req.body)
 res.send("OK")
})

app.post("/teste", (req, res) => {
    res.send("TESTE POST OK!")
})

// CRIE UMA CHAMADA PARA O RECURSO/ALUNO
// DEVOLVA NA RESPOSTA, SEU NOME E MATRÍCULA

app.get("/aluno", (req, res) => {
    res.send("Vitor Alves Modesto, 23114290080")
})

// path param- recebe o valor do usuário pela url
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

//QUERY PARAM - segunda forma de receber o valor pela url (pessoa?chave=valor)
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    const nomePessoa = req.query.nome
    const idadePessoa = req.query.idade
})

// startando servidor(backend - api) para escutar comunicações
// na porta 3000
/* app.listen(3000, () => {
   console.log("Api iniciando! Rodando em http://localhost:3000")
})*/

// EXERCÍCIO LISTA 1, COM PATH PARAMS:
 app.get('/notas/:nota1/:nota2/:nota3/:nota4', (req, res) => {
    console.log(req.params)

    const nota1 = parseFloat(req.params.nota1)
    const nota2 = parseFloat(req.params.nota2)
    const nota3 = parseFloat(req.params.nota3)
    const nota4 = parseFloat(req.params.nota4)
    const media = (nota1+nota2+nota3+nota4)/4

    if(media >= 7){
        res.send(`sua média foi de aprovado`)
    } else {
        res.send(`sua média foi de reprovado`)

    } 
})


// EXERCÍCIO LISTA 1, COM QUERRY PARAMS:

// notas?nota1=5
// pessoa ? chave = valor 
// para receber mais de uma chave concatena com &

app.get('/notas', (req,res) => {
    console.log(req.query)
    const nota1 = Number(req.query.nota1)
    const nota2 = Number(req.query.nota2)
    const nota3 = Number(req.query.nota3)
    const nota4 = Number(req.query.nota4)
    const media = (nota1 +nota2 +nota3 +nota4)/4
    if(media >= 7){
        res.send('sua média foi de aprovado')
    } else {
        res.send('sua média foi de reprovado')
    } 
})

// fazendo com body no postman
app.post('/exercicio1', (req,res) => {
    console.log(req.body)
    const nota1 = Number(req.body.nota1)
    const nota2 = Number(req.body.nota2)
    const nota3 = Number(req.body.nota3)
    const nota4 = Number(req.body.nota4)
    const media = (nota1 +nota2 +nota3 +nota4)/4

   const mensagem = media >= 7 ? "Aprovado" : "Reprovado"
   const resposta = {
    media,
    mensagem
   }
   res.json(resposta)
})

app.listen(3000, () => {
    console.log("Api iniciando! Rodando em http://localhost:3000")
 })