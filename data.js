function formatDate(date) {
    let dia       = ("00" + date.getDate()).slice(-2);
    let mes       = date.getMonth()+1;
    let ano       = date.getFullYear();
    let minutos   = ("00" + date.getMinutes()).slice(-2);
    let segundos  = ("00" + date.getSeconds()).slice(-2);
    let timezone  = date.getTimezoneOffset();
    let horas     = date.getHours() % 12 ? date.getHours() % 12 : 12;
    
    horas = ("00" + horas).slice(-2);
    let txtHoras = horas >= 12 ? 'PM' : 'AM';
    
    let retorno;
    retorno = dia + '/' + mes + '/' + ano + ' ';
    retorno = retorno + horas + ':' + minutos + ':' + segundos;
    retorno = retorno + ' ' + txtHoras + ' (' + timezone + ')';
    return  retorno;
}

console.log(formatDate(new Date())); 

module.exports = {formatDate}