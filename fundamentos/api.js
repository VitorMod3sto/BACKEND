// importando modulo core http
const http = require('http')

let contador = 0
console.log('contador iniciado! ')
console.log('contador de requisições: 0')

// criando o servidor e iniciando a aplicação usandi modulo http
http.createServer((req, res) => {
// construindo logica da API, qualquer requisição irá devolver resposta

contador++
console.log('contador de requisicções' + contador)
// puxamos a variável contador com $ entre crase
res.write(`Você é o visitante número: ${contador}`)
res.end()

// startando server para escutar comunicação da porta 3000
}).listen(3000)

