const { somar, multiplicar, subtrair, dividir } = require('./operacoes_matematicas');
const { SalvarLog }  = require('./utils');
const prompt = require('prompt-sync')({ sigint: true });

let opcao = -1;
let a, b, x = 0
let c = []

while (opcao !== 0) {
    console.log(
        `
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        0 - Sair
        `
    );

    opcao = parseInt(prompt('Escolha a operação: '));
    if(opcao === 0){
        return
    }

    a = parseInt(prompt('Escolha um valor: '));
    b = parseInt(prompt('Escolha outro valor: '));

    if (opcao === 1) {
        x = somar(a, b)
        console.log(x);
    } else if (opcao === 2) {
        x = subtrair(a, b)
        console.log(x);
    } else if (opcao === 3) {
        x = multiplicar(a, b)
        console.log(x);
    } else if (opcao === 4) {
        x = dividir(a, b)
        console.log(x);
    }

    //implementação de log
    SalvarLog(opcao, a, b, x)
}