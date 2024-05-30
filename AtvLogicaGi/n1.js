// Giovanna Martins Soares - 23214290130
var pessoa = {
    nome: 'Giovanna',
    idade: 21,
    telefone: 40028922,
    ddd: 61
};

var time = {
    jogador: 'David Luiz',
    numero: 23,
    posicao: 'defensor',
    idade: 37
};

var comida = {
    nome: 'acarajé',
    origem: 'bahia',
    bebida: 'guaraná jesus',
    nota: 10
};

// saida de key
console.log(Object.keys(pessoa));
console.log(Object.keys(time));
console.log(Object.keys(comida));

// saida de values
console.log(Object.values(pessoa));
console.log(Object.values(time));
console.log(Object.values(comida));