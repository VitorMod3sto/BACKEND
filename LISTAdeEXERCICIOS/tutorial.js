
// pedindo um dado no terminal
// recebendo a resposta
const prompt = require('prompt-sync')();

const nome = prompt("Qual o seu nome? ")
const idade =prompt("Qual é a usa idade? ")
const curso =prompt("Qual é o seu curso? ")
const notaA1 = prompt("Qual sua primeira nota 1? ")
const notaA2 = prompt("Qual sua primeira nota 2? ")

console.log("Olá " + nome + ", seu curso é " + curso)

// condicionando variável idade
if (idade>= 18){
    console.log("Você é maior de idade")
} else{
console.log("Você é menor de idade")
}


// transformando string recebido em numero 
const notaA1num = Number(notaA1)
const notaA2num = Number(notaA2)

// calculando media da nota informada:
const media = (notaA1num+ notaA2num)/2
console.log("Sua média é: " + media)

if (media >= 7){
console.log("Você passou.")
} else {
    console.log("Você foi reprovado.")
}






