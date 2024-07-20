setInterval(clock, 1000);
function clock(){
    var date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        second = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minute + ':' + second;
}