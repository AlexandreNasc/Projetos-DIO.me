/*
1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja>= 5 e <7 imprima "Reprovação"
    Caso a média seja >=7 imprima "Aprovado"
*/

const {gets, print} = require('./funcoes-auxiliares1.js');

const media = gets();

if ( media >=0 && media <5 ){
    print('Você está Reprovado.');
}
else if (media >=5 && media <7) {
    print('Você está em Recuperação.');
}
else if (media >=7 && media <=10){
    print('Você está Aprovado.');
}
else {
    print('Dados inválido.');
}