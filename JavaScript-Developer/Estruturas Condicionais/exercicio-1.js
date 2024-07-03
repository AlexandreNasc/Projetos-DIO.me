
/* Média de Notas

Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tablela abaixo 

    media = (nota_1 + nota_2 + nota_3) / 3;

    Classificação:

    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

const nota_1 = 7;
const nota_2 = 7; 
const nota_3 = 7;
const media = (nota_1 + nota_2 + nota_3) / 3;

console.log(media.toFixed(2));// A expressão toFixed(2) irá aplicar apenas uma casa decimal Ex: 7.33 em vez de 7.3333333

if(media <5){
    console.log('reprovação');
}
else if (media >5 && media <=7){
    console.log('recuperação')
}
else {
    console.log('passou de semestre')
}