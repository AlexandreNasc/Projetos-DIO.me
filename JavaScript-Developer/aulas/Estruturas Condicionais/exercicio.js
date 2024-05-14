
// faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no seu carro;
// 4 - gasto médio de combustível do carro por KM;
// 5 - distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = 'Gasolina';
const kmEmlitros = 10;
const distanciaEmKM = 100;

const litrosConsumidos = distanciaEmKM / kmEmlitros;

if (tipoCombustivel === 'Etanol'){
    const valorGastoEtanol = litrosConsumidos*precoEtanol;
    console.log(valorGastoEtanol.toFixed(2));
}
else {
    const valorGastoGasolina = litrosConsumidos*precoGasolina;
    console.log(valorGastoGasolina.toFixed(2));
}






