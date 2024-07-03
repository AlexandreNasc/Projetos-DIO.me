// Determinando se o número e PAR ou Impar.

const numero =13;

const numeroPar = (numero % 2) === 0; 
// O uso de sinal de ==: Dois == iguinora o tipo. const numeroPar = (numero % 2) == '0';
// O uso de sinal de ===: Três === Distingue STRING de NUMEROS const numeroPar = (numero % 2) === 0;

console.log(numeroPar);