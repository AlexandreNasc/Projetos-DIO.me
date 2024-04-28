/*
Crie uma classe para representar pessoas..
Paa cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70K de peso e 1.75 de altura e peça ao José para dizer o valor do seu IMV;
*/

class Pessoa {
    nome;
    peso;
    altura;


    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    
    calcularImc() {
       return this.peso / (this.altura * this.altura);
    }
}
const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.calcularImc().toFixed(2));

const alexandre = new Pessoa('alexandre', 63, 1.70);
console.log(alexandre.calcularImc().toFixed(2));