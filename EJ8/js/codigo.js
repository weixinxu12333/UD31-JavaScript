function carregar() {
    var num = prompt("Indroduce un num:");
    document.getElementById("p").innerHTML = calculo(num);
}

function calculo(num) {
    if (num % 2 == 0)
        return "Es par";
    else
        return "Es impar";
}
