const { somar, multiplicar, subtrair, dividir } = require('./operacoes_matematicas');
const prompt = require('prompt-sync')({ sigint: true });

let opcao = -1;
let a, b = 0

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
        console.log(somar(a, b));
    } else if (opcao === 2) {
        console.log(subtrair(a, b));
    } else if (opcao === 3) {
        console.log(multiplicar(a, b));
    } else if (opcao === 4) {
        console.log(dividir(a, b));
    }
}