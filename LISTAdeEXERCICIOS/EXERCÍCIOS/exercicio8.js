/* 8. Faça um script que determine o volume de uma caixa d’água cilíndrica, sendo que o raio e a altura devem 
ser fornecidos. OBS: V = PI * Raio^2 * Altura */

const prompt = require('prompt-sync')();
const altura = parseFloat(prompt("Informe a altura: "))
const raio = parseFloat(prompt("Informe o raio: "))

volume = 3.14 * (raio*raio) * altura

console.log ("O volume é: " + volume)
