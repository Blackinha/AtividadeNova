// Giovanna Martins Soares - 23214290130
pessoa = {
    nome: [
        { nome: 'pedro'},
        { nome: 'lorran'},
        { nome: 'beatriz'}
    ],
    idade: [32, 21, 18],
    telefone: [1000123, 1000321, 1231000],
    ddd: 61,
    oi: function() {
        let saidaOi = '';
        for (let i in this.nome) {
        saidaOi += `Oi. Meu nome eh ${this.nome[i].nome} e tenho ${this.idade[i]} anos. Meu telefone eh (${this.ddd}) ${this.telefone[i]}. \n`;
        }
        return saidaOi;
    }
};

time = {
    jogador: [
        { jogador: 'David Luiz'},
        { jogador: 'Kylian Mbappé Lottin'},
        { jogador: 'Pedro Gonzalez Lopez'}
    ],
    time: ['flamengo','PSG','FC Barcelona'],
    numero: [23, 7, 16],
    idade: [37, 23, 19],
    play: function() {
        let saidaPlay = '';
        for (let j in this.jogador) {
            saidaPlay += `Esse eh o ${this.jogador[j].jogador}. Numero ${this.numero[j]} do ${this.time[j]}, com a idade de ${this.idade[j]} anos. \n`
        }
        return saidaPlay;
    }
};

comida = {
    nome: [
        { nome: 'vatapa'},
        { nome: 'feijoada'},
        { nome: 'maniçoba'}
    ],
    origem: ['bahia', 'rio de janeiro', 'pará'],
    bebida: ['guarana jesus', 'guarana com laranja','coca cola' ],
    nota: [10, 10, 2],
    masterchef: function() {
        let saidaMasterchef = '';
        for(let k in this.nome) {
            saidaMasterchef += `Esse eh o prato ${this.nome[k].nome} vindo da ${this.origem[k]}. Normalmente acompanhada de ${this.bebida[k]}. Sua nota eh ${this.nota[k]}. \n`
        }
        return saidaMasterchef;
    }
};

console.log(pessoa.oi());
console.log(time.play());
console.log(comida.masterchef());