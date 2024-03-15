// criando modulo (script reutilizável)
const somar = function (numA, numB){
    return numA + numB
}
const subtrair = function (numA, numB){
    return numA - numB
}

const mutiplicar = function (numA, numB){
    return numA * numB
}

const dividir = function (numA, numB){
    return numA / numB
}

// exportando funcionalidades

module.exports = {
    somar, subtrair, mutiplicar, dividir
}
