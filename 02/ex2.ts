//Escreve seu codigo aqui

interface ObjValores {
    valor1: number,
    valor2: number
}

function somar(obj:ObjValores):number{
    return obj.valor1 + obj.valor2
}

console.log(somar({valor1: 50, valor2:15}))