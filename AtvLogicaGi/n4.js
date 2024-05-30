// Giovanna Martins Soares - 23214290130
class pessoa {
    constructor(nome, idade, telefone, ddd) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.ddd = ddd;
    }  
    oi() {
        return `Oi. Meu nome eh ${this.nome} e tenho ${this.idade} anos. Meu telefone eh (${this.ddd}) ${this.telefone}. \n`
    }
    saudacao() {
        return `Sou ${this.nome} e tenho ${this.idade}. Meu numero eh (${this.ddd}) ${this.telefone} \n`
    }
};

class time {
    constructor (nome, numero, time, idade) {
        this.nome = nome;
        this.time = time;
        this.numero = numero;
        this.idade = idade;
    }
    apresentacao() {
        return `Esse eh o ${this.nome}. Numero ${this.numero} do ${this.time}, com a idade de ${this.idade} anos. \n`
    }
    ola() {
        return `Meu nome eh ${this.nome} e sou o numero ${this.numero}. Tenho ${this.idade} anos e sou do time ${this.time}`
    }
};

class comida {
    constructor (nome, origem, bebida, nota) {
        this.nome = nome;
        this.nome = origem;
        this.bebida = bebida;
        this.nota = nota;
    }
    masterchef() {
        return `Esse eh o prato ${this.nome} vindo da ${this.origem}. Normalmente acompanhada de ${this.bebida}. Sua nota eh ${this.nota}. \n`
    }
    ramsey() {
        return `Esse ${this.nome} eh o pior prato que ja comi. As pessoas da ${this.origem} se sentem mal ao ver isso. Nem bebendo ${this.bebida} melhora. Nota ${this.nota} \n`
    }
};

// pessoa
const lorran = new pessoa('Lorran', 24, 10001010, 61);
const beatriz = new pessoa('Beatriz', 18, 123897124, 61);
const pedro = new pessoa('Pedro', 21, 123798712, 61)

// time
const david = new time('David Luiz', 'flamengo', 23, 37);
const mbappe = new time('Kylian Mbappé Lottin', 'PSG', 7, 23);
const pedri = new time('Pedro Gonzalez Lopez', 'FC Barcelona', 16, 19);

// comida
const vatapa = new comida('vatapa', 'bahia', 'guarana jesus', 10);
const feijoada = new comida('feijoada', 'rio de janeiro', 'guarana com laranja', 10);
const manicoba = new comida('maniçoba', 'para', 'coca cola', 2);

// saida pessoa
console.log(pedro.oi());
console.log(lorran.oi());
console.log(beatriz.oi());
console.log(pedro.saudacao());
console.log(lorran.saudacao());
console.log(beatriz.saudacao());

// saida time
console.log(david.ola());
console.log(mbappe.ola());
console.log(pedri.ola());
console.log(david.apresentacao());
console.log(mbappe.apresentacao());
console.log(pedri.apresentacao());

// saida comida
console.log(vatapa.masterchef());
console.log(feijoada.masterchef());
console.log(manicoba.masterchef());
console.log(vatapa.ramsey());
console.log(feijoada.ramsey());
console.log(manicoba.ramsey());
