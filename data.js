function formatDate(date) {
    let dia       = ("00" + date.getDate()).slice(-2);
    let mes       = ("00" + (date.getMonth() + 1)).slice(-2);
    let ano       = date.getFullYear();
    let minutos   = ("00" + date.getMinutes()).slice(-2);
    let segundos  = ("00" + date.getSeconds()).slice(-2);
    let timezone  = date.getTimezoneOffset();

    // usar hora em 24h para definir AM/PM, depois converter para 12h
    let hora24    = date.getHours();
    let isPM      = hora24 >= 12;
    let horas     = hora24 % 12 || 12; // 0 -> 12
    horas = ("00" + horas).slice(-2);

    let txtHoras = isPM ? 'PM' : 'AM';

    let retorno;
    retorno = dia + '/' + mes + '/' + ano + ' ';
    retorno = retorno + horas + ':' + minutos + ':' + segundos;
    retorno = retorno + ' ' + txtHoras + ' (' + timezone + ')';
    return  retorno;
}

console.log(formatDate(new Date())); 

module.exports = {formatDate}