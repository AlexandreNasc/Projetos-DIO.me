
//    Execute um código que chame seu nome.

function escrevaMeuNome(nome){
    return 'Seu nome é ' + nome;
}

function verificarIdade(idade) {

if (idade >=18) {
    console.log(escrevaMeuNome('Alexandre ') + 'seu status é maior de idade');
} else{
    console.log('seu status é menor de idade');
}
}
verificarIdade(21)