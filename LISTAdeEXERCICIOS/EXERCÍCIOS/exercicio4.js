/* 4. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e 
dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e 
os impostos de 45%, escrever um script para ler o custo de fábrica de um carro, calcular e escrever o 
custo final ao consumidor. */

const prompt = require('prompt-sync')();
const custoF = parseFloat(prompt("Insira o valor do custo de fábrica: "))
const porcentagemD = custoF * (28/100)
const imposto = custoF * (48/100)
let custoFinal = custoF + porcentagemD + imposto
console.log("Custo final: " + custoFinal)
