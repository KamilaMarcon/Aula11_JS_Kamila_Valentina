//spread operator ... pulverizar
let primeiros = [1, 2, 3];

let numeros = [primeiros, 4, 5, 6];

let numeros2 = [...primeiros, 4, 5, 6];

console.log(numeros);

console.log(numeros2);

//spredando num objeto
let pessoa = {
    nome: 'Kamila',
    idade: 16,
    cargo: 'programadora'

};

let dadosPessoa = {
    ...pessoa,
    status: 'ativo',
    cidade: 'campo largo'
}

console.log(dadosPessoa);
console.log(dadosPessoa.cargo);

//exemplificando de uma forma mais realista 

function novoUsuario(info) {
    //console.log(info);
    let dados ={
        ...info,
        status:'ativo',
        inicio:'20/05/24',
        codigo:'123'
    };
console.log(dados);
}

novoUsuario({
    nome: 'Kamila',
    sobreNome: 'Marcon',
    cargo: 'desenvovedora'
});
