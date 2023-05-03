//Escreve seu codigo aqui

interface Posts {
    titulo: string,
    autora: string,
    conteudo: string,
    dataPub: string,
}

const postagem: Posts = {
    titulo: "Aprendendo a programar em typescript",
    autora: "Amandalfs",
    conteudo: "E so tipar as coisas com de acordo com esperado de receber",
    dataPub: "05/03/2023"
}

console.log(postagem);