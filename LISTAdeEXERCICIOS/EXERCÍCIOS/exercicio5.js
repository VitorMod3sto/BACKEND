/* 5. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e
dos impostos (aplicados ao custo de fábrica). Escreva um script para ler o custo de fábrica de um carro, a
porcentagem do distribuidor e o imposto, e calcular e escrever o custo final ao consumidor */

const prompt = require('prompt-sync')();
const fabricante = parseFloat(prompt("Insira o valor do custo de fábrica: "))
const distribuidor = parseFloat(prompt("Insira a porcentagem do distribuidor: "))
const imposto = parseFloat(prompt("Insira a porcentagem do imposto: "))

let porcentD = fabricante * distribuidor/100
let porcentI = fabricante *  imposto/100
let custoFinal = fabricante + porcentD + porcentI
console.log("Custo final ao consumidor é: " + custoFinal)