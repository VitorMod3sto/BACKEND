/* 9. Faça um script para somar dois números e multiplicar o resultado pelo primeiro número. */

const prompt = require('prompt-sync')()
const numero1 = parseFloat(prompt('Informe o primeiro número: '))
const numero2 = parseFloat(prompt("Informe o segundo número: "))
const soma = numero1 + numero2

const resultado = soma * numero1
console.log("O resultado é: " + resultado)
