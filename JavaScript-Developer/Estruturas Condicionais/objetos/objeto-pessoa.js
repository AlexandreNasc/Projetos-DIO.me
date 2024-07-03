
class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Alexandre = new pessoa ();
Alexandre.nome = 'Alexandre Nascimento';
Alexandre.idade = 39;

const Jefferson = new pessoa ();
Jefferson.nome = 'Jefferson Lima';
Jefferson.idade = 33;

const Thiago = new pessoa ();
Thiago.nome = 'Thiago Nascimento';
Thiago.idade = 28;

const André = new pessoa ();
André.nome = 'André Golveia';
André.idade = 42;


Alexandre.descrever();
