const http = require('http');
const port = 4000;
const { somar, multiplicar, subtrair, dividir } = require('./operacoes_matematicas');

let resultado = 0

const server = http.createServer((req, res) => {
    const {method, url} = req;
    let body = ""

    //rota soma
    if (url === '/somar' && method === 'POST'){
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try{

                const { a, b } = JSON.parse(body);
                resultado = somar(a, b)

                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`Detalhes: a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch(e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);
                
            }
        });

        //executar função de soma e retornar o resultado
        resultado = somar()
    }

    //rota subtrair
    if (url === '/subtrair' && method === 'POST'){
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try{

                const { a, b } = JSON.parse(body);
                resultado = subtrair(a, b)

                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`Detalhes: a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch(e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = subtrair()
    }

    //rota multiplicar
    if (url === '/multiplicar' && method === 'POST'){
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try{

                const { a, b } = JSON.parse(body);
                resultado = multiplicar(a, b)

                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`Detalhes: a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch(e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = multiplicar()
    }

    //rota dividir
    if (url === '/dividir' && method === 'POST'){
        //coletar dados recebidos na request
        req.on("data", chunk => (body += chunk))
        req.on("end", () => {
            try{

                const { a, b } = JSON.parse(body);
                resultado = dividir(a, b)

                //envia resposta de sucesso
                res.writeHead(200, { "Content-Type": "text/plain" });
                return res.end(`Detalhes: a = ${a}, b = ${b}, resultado = ${resultado}`);

            } catch(e) {

                //envia resposta de erro tratada
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end(`Falha ao executar operação: \n ${e}`);

            }
        });

        //executar função de soma e retornar o resultado
        resultado = dividir()
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em ${port}`);
});