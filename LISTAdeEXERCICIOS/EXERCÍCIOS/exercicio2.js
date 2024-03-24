/* 2. Escreva um script para ler o número total de eleitores de um município, o número de votos brancos, 
nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.*/

const prompt = require('prompt-sync')();
const totalEleitores = parseInt(prompt("Qual número total de eleitores? "))
const votosBrancos = parseInt(prompt ("Qual número de votos brancos? "))
const votosNulos = parseInt(prompt("Quaal o número de votos nulos? "))
const votosValidos = parseInt(prompt("Qual número de votos válidos "))

let percentualB = (votosBrancos/totalEleitores) * 100
let percentualN = (votosBrancos/totalEleitores) * 100
let percentualV = (votosValidos/totalEleitores) * 100

console.log(`O total de eleitores foi ${totalEleitores}. Porcentagem de votos Brancos: ${percentualB}%.
Porcentagem de votos Nulos ${percentualN}%. Porcentagem de votos Válidos ${percentualV}% `)