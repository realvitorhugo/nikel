const nome = "Vitor Hugo";
let nome2 = "";
let pessoa = {
    nome: "vitor",
    idade: "38",
    trabalho: "analista"
}

function alterarnome() {
    nome2 = "maria"
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

console.log(pessoa)

console.log("Nome:");
console.log(pessoa.nome);

//recebeEalteraNome("pedro");
//recebeEalteraNome("maria");


//alterarnome();