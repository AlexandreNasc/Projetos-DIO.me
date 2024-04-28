
/*Faça um programa oara calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do Combustível;
2- Gasto médio do combustível do carro po KM;
3- Distância em KM da Viagem;

Imprima no console o valor que será gasto de combustível para realozar esta viagem.
*/

const precoCombustivel = 5.79;
const KM_litros = 12;
const distancia_KM = 1580;

 const litrosConsumidos = distancia_KM / KM_litros;
const valorGasto = litrosConsumidos*precoCombustivel;

console.log(valorGasto.toFixed(2));