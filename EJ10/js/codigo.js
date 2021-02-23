function carregar() {
    var cadena = prompt("Indroduce una cadena de texto:");
    document.getElementById("p").innerHTML = determinar(cadena);
}

function determinar(cadena) {
    if (cadena == cadena.split('').reverse().join(''))
        return "es palindromo";
    else {
        return "no es palindromo";
    }
}
