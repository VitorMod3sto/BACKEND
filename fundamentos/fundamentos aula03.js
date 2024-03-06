String
Number
Boolean
Object
// tratamento de dados:
// string

let textoCompleto = "Olá, beleza?"
console.log(textoCompleto.toUpperCase())
console.log(textoCompleto.toLowerCase())
console.log(textoCompleto.replace("beleza", "1234"))

// transformação de dados
// numero em string

let numeroEmString = String(1.56)
console.log(numeroEmString)
console.log(typeof numeroEmString)

// string em numero

let stringEmNumero = Number("1.5678")
console.log(stringEmNumero)
console.log(typeof stringEmNumero)

// array
let listaDeCarros = ["Gol", "Uno", "Civic", "Corolla"]
listaDeCarros.push("Lancer") // insere mais um item a lista
console.log(listaDeCarros)

listaDeCarros.pop() // exclui o último da lista
console.log(listaDeCarros)

// object
let pessoa = {
    nome: "Vitor Alves",
    idade: 19,
    curso: "ADS",
    matrícula: "23114290080",
    endereço: {
        cep: "72210054",
        cidade: "ceilândia"
    }
}
console.log(pessoa)
console.log(pessoa)
console.log(pessoa.endereço)





