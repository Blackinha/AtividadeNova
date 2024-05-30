// Giovanna Martins Soares - 23214290130
function pessoa (nome, idade, telefone, ddd) {
    this.nome = nome;
    this.idade = idade;
    this.telefone = telefone;
    this.ddd = ddd;
    this.oi = function() {
        return (`Oi. Meu nome eh ${nome} e tenho ${idade} anos. Meu telefone eh (${ddd}) ${telefone}. \n`);
    };
};

function time (jogador, time, numero, idade) {
    this.jogador = jogador;
    this.time = time;
    this.numero = numero;
    this.idade = idade;
    this.play = function() {
        return (`Esse eh o ${jogador}. Numero ${numero} do ${time}, com a idade de ${idade} anos. \n`);
    };
};

function comida (nome, origem, bebida, nota) {
    this.nome = nome;
    this.origem = origem;
    this.bebida = bebida;
    this.nota = nota;
    this.masterchef = function() {
        return (`Esse eh o prato ${nome} vindo da ${origem}. Normalmente acompanhada de ${bebida}. Sua nota eh ${nota}. \n`);
    };
};

const pedro = new pessoa('Pedro', 21, 10000000, 61);
const lorran = new pessoa('lorran', 32, 123123123, 61);
const beatriz = new pessoa('Beatriz', 18, 123123423, 61);

const david = new time('David Luiz', 'flamengo', 23, 37);
const mbappe = new time('Kylian Mbappé Lottin', 'PSG', 7, 23);
const pedri = new time('Pedro Gonzalez Lopez', 'FC Barcelona', 16, 19);

const vatapa = new comida('vatapa', 'bahia', 'guarana jesus', 10);
const feijoada = new comida('feijoada', 'rio de janeiro', 'guarana com laranja', 10);
const manicoba = new comida('maniçoba', 'para', 'coca cola', 2);

// saida pessoa
console.log(pedro.oi());
console.log(lorran.oi());
console.log(beatriz.oi());

// saida time
console.log(david.play());
console.log(mbappe.play());
console.log(pedri.play());

// saida comida
console.log(vatapa.masterchef());
console.log(feijoada.masterchef());
console.log(manicoba.masterchef());