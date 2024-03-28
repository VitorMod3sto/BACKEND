/* 6. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. 
Escrever um script que leia o número de carros por ele vendidos, o valor total de suas vendas,
o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. */ 

const prompt = require('prompt-sync')();
const salariofixo = parseFloat(prompt("Qual valor do salário fixo do funcionário? "))
const carrosVendidos = parseInt(prompt("Quantos carros foram vendidos por ele? "))
const comissãoCV = parseFloat(prompt("Qual valor de cada venda feita? "))
const totalVendas = parseFloat(prompt("Qual foi o valor total de vendas da loja? "))
const comissaoTV = totalVendas * (5/100)

let salarioFinal = salariofixo + (carrosVendidos * comissãoCV) + comissaoTV

console.log("O salário final é: " + salarioFinal)