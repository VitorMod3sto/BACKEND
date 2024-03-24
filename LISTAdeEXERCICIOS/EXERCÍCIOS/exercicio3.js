/* 3. Escreva um script para ler o salário mensal atual de um funcionário e o percentual de reajuste. 
Calcular e escrever o valor do novo salário. */

const prompt = require('prompt-sync')();
let salarioMensal = parseFloat(prompt("Informe o valor do salário: "))
let percentAjuste = parseFloat(prompt("Informe o percentual de reajuste: "))
let salarioajustado  = salarioMensal + (salarioMensal * (percentAjuste/100))

console.log("Seu salário ajustado é: "+ "R$" + salarioajustado)
