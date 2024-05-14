
// // Como criar Classes e Instâncias

class Pessoa {
    nome ;
    idade ;

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Alexandre = new Pessoa();
Alexandre.nome = 'Alexandre Carlos';
Alexandre.idade = 39;

const Cida = new Pessoa();
Cida.nome = 'Cida';
Cida.idade = 44;

Alexandre.descrever();
Cida.descrever();
