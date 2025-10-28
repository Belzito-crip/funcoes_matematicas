const http = require('http');
const port = 3000;
const { somar, multiplicar, subtrair, dividir } = require('./operacoes_matematicas');
const { SalvarLog, LerLog } = require('./utils');

let resultado = 0
let logs

const server = http.createServer((req, res) => {
    const { method, url } = req;
    let body = ""
    let opcao = ""

    //rota soma
    if (url === '/somar' && method === 'POST') {
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try {

                const { a, b } = JSON.parse(body);
                resultado = somar(a, b)
                opcao = "Adição"

                SalvarLog(opcao, a, b, resultado)

                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch (e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = somar()
    }

    //rota subtrair
    if (url === '/subtrair' && method === 'POST') {
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try {

                const { a, b } = JSON.parse(body);
                resultado = subtrair(a, b)
                opcao = "Subtração"

                SalvarLog(opcao, a, b, resultado)
                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch (e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = subtrair()
    }

    //rota multiplicar
    if (url === '/multiplicar' && method === 'POST') {
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try {

                const { a, b } = JSON.parse(body);
                resultado = multiplicar(a, b)
                opcao = "Multiplicação"

                SalvarLog(opcao, a, b, resultado)
                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch (e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = multiplicar()
    }

    //rota dividir
    if (url === '/dividir' && method === 'POST') {
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try {

                const { a, b } = JSON.parse(body);
                resultado = dividir(a, b)
                opcao = "Divisão"

                SalvarLog(opcao, a, b, resultado)
                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch (e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = dividir()
    }

    //rota ler logs
    if(url === '/logs' && method === 'GET'){
        logs = LerLog()

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(logs));
    }

});

server.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});