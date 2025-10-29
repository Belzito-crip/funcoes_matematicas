const http = require('http');
const dados = JSON.stringify({a: 18, b: 0});
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
        try {
        // Tenta converter o texto da resposta em JSON
        const json = JSON.parse(resposta_txt);

        // Exibe formatado com 2 espaços de indentação
        console.log("Resposta formatada:");
        console.log(JSON.stringify(json, null, 2));
    } catch (erro) {
        // Se não for JSON válido, mostra o texto cru
        console.log("Resposta recebida (texto):", resposta_txt);
    }
    });
});

request.write(dados);
request.end();