//Escreve seu codigo aqui

interface Numeros{
    valor1: number,
    valor2: number
}

function multi(obj:Numeros):number{
    return obj.valor1 * obj.valor2
}

console.log(multi({valor1: 58, valor2: 10}))