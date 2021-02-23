function carregar() {
    var num = prompt("Indroduce un num:");
    document.getElementById("p").innerHTML = calculo(num);
}

function calculo(num) {
    var aux = 1;
    for (var i = num; i > 0; i--) {
        aux *= i;
    }
    
    return aux;
}
