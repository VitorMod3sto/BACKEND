/* 7. Faça um script que leia duas notas de um aluno, calcule e escreva a média final deste aluno. 
Considerar que a média é ponderada e que o peso das notas é 4 e 6.
*/

const prompt = require('prompt-sync')();
let nota1 = parseFloat(prompt("Digite a nota 1: "))
let nota2 = parseFloat(prompt("Digite a nota 2: "))

let mediaP = (4* nota1 + 6 * nota2)/(4+6)
console.log("A média ponderada é: " + mediaP)