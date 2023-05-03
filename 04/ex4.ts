//Escreve seu codigo aqui

interface Infos{
    nome: string
    idade: number,
}

function mensagem(obj:Infos):void{
    console.log(`Ola ${obj.nome} de ${obj.idade} anos`)
}

mensagem({nome: "Amanda", idade: 19});