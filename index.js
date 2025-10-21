const { somar, multiplicar, subtrair, dividir } = require('./operacoes_matematicas');
const { SalvarLog, LerLog } = require('./utils');
const prompt = require('prompt-sync')({ sigint: true });

let opcao = -1;
let a, b, x =0;

while (opcao !== 0) {
    console.log(
        `
        1 - Somar
        2 - Subtrair
        3 - Multiplicar
        4 - Dividir
        5 - Ler Log
        0 - Sair
        `
    );

    opcao = parseInt(prompt('Escolha a operação: '));
    if (opcao === 0) {
        return;
    }

    if (opcao === 5) {
        LerLog();
        continue;
    }

    a = parseInt(prompt('Escolha um valor: '));
    b = parseInt(prompt('Escolha outro valor: '));

    if (opcao === 1) {
        opcao = "Adição"
        x = somar(a, b);
        console.log(x);
    } else if (opcao === 2) {
        opcao = "Subtração"
        x = subtrair(a, b);
        console.log(x);
    } else if (opcao === 3) {
        opcao = "Multiplicação"
        x = multiplicar(a, b);
        console.log(x);
    } else if (opcao === 4) {
        opcao = "Divisão"
        x = dividir(a, b);
        console.log(x);
    }

    // Implementação de log
    SalvarLog(opcao, a, b, x);
}