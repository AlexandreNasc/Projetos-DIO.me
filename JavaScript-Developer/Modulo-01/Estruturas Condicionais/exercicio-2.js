
/*
2) O IMC - Indic de Massa Corporal e um criterio da Oganização Mundia de Saúde para dar uam inidicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e  a altura de um adulto sua condição de acordo com a tabela abaixo.

- abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- acima de 40 Obsedade Grave;
*/

const peso = 70
const altura = 1.70

const imc = peso / Math.pow(altura, 2)
console.log(imc.toFixed(2))

if(imc < 18.5){
    console.log('Abaixo do peso')
}
else if (imc >=18.5 && imc <= 25) {
    console.log('peso Normal')
}
else if (imc >25 && imc < 30) {
    console.log('Acima do Peso')
}
else if (imc >30 && imc < 40) {
    console.log('Obeso')
}
else {
    console.log('Obsedade Grave')
} 



