

const notas = [];

notas.push(4);
notas.push(9);
notas.push(2);

let soma = 0;

for (let i=0; i< notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
print('Sua média é', media);

if ( media < 5 ){
    print('Você está Reprovado.');
}else if (media >= 5 && media <7) {
    print('Você está em Recuperação.');
} else if (media >=7){
    print('Você está Aprovado.');
}
else(media <0 || media >10){
    print('Dados inválido.');
}