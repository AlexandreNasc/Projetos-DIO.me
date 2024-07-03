/*
1) Faça um programa que receba a média de um aluno.
    Caso a média seja < 5 imprima "Reprovado"
    Caso a média seja>= 5 e <7 imprima "Reprovação"
    Caso a média seja >=7 imprima "Aprovado"
*/

const {gets, print} = require('./funcoes-auxiliares2.js');

const n = gets();

let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
    const numero = gets();
if (numero % 2 === 0) {
    if (numero > maiorNumeroPar) {
        maiorNumeroPar = numero;
    }
} else {
    if (menorNumeroImpar === 0) {
        menorNumeroImpar = numero;
    } else if (numero < menorNumeroImpar) {
        menorNumeroImpar = numero;
    }
 }
}
print('Maior número Par:' + maiorNumeroPar);
print('Menor número Impar:' + menorNumeroImpar);
