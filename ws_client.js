const http = require('http');
const dados = JSON.stringify({a: 18, b: 3});
const payload = {
    hostname : "localhost",
    port     : 3000,
    path     : "/logs",
    method   : "GET",
    Headers  : {"Content-Type":"application/json", "Content-Lenght":Buffer.byteLength(dados)}
};

const request = http.request(payload, response => {
    let resposta_txt = "";
    response.on("data", chunk => resposta_txt += chunk);
    response.on("end", () => {
        console.log(`Resposta recebida: ${resposta_txt}`)
    });
});

request.write(dados);
request.end();