

class pessoa {
    
    nome;
    idade;

    constructor() {
        this.nome = 'teste';
        this.idade = 'teste';
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}

const xande = new pessoa();

const sandro = new pessoa();

xande.descrever();
sandro.descrever();


