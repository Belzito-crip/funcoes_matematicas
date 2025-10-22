const { formatDate }  = require('./data');

const fs = require('fs');
const path = require('path');

//criar pasta caso n exista
const logsDir = path.join(__dirname, "logs");
if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
}

function SalvarLog(operacao, a, b, resultado){
    const dataAtual = new Date();
    // usar data local (YYYY-MM-DD) para o nome do arquivo
    const yyyy = dataAtual.getFullYear();
    const mm = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dd = String(dataAtual.getDate()).padStart(2, '0');
    const dataStr = `${yyyy}-${mm}-${dd}`;
    const logPath = path.join(logsDir, `log-${dataStr}.json`);

    const novoRegistro = {
        data     : formatDate(new Date()),
        operacao,
        valores  : `${a} e ${b}`,
        resultado
    };

    let logExistentes = [];
    if(fs.existsSync(logPath)){
        const conteudo = fs.readFileSync(logPath, "utf-8")
        logExistentes = JSON.parse(conteudo || "[]")
    };

    logExistentes.push(novoRegistro);
    fs.writeFileSync(logPath, JSON.stringify(logExistentes, null, 2), "utf-8");

    console.log(`Operação registrada em ${path.basename(logPath)}`)
}

function LerLog() {
    const dataAtual = new Date();
    // usar data local (YYYY-MM-DD) para o nome do arquivo
    const yyyy = dataAtual.getFullYear();
    const mm = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const dd = String(dataAtual.getDate()).padStart(2, '0');
    const dataStr = `${yyyy}-${mm}-${dd}`;
    const logPath = path.join(logsDir, `log-${dataStr}.json`);

    if (fs.existsSync(logPath)) {
        const conteudo = fs.readFileSync(logPath, "utf-8");
        const logs = JSON.parse(conteudo || "[]");
        console.log("Logs registrados:");
        logs.forEach((log, index) => {
            console.log(`${index + 1}. Data: ${log.data}, Operação: ${log.operacao}, Valores: ${log.valores}, Resultado: ${log.resultado}`);
        });
    } else {
        console.log("Nenhum log encontrado para a data atual.");
    }
}

module.exports = { SalvarLog, LerLog };
