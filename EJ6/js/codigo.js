function carregar() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    var dni = prompt("Introduce los numeros de dni (8 numeros)");
    var letra = prompt("Introduce letra de dni:");

    if (letra.toUpperCase() != calcularLetra(dni, letras))
        console.log("Letra no reconocida");

    if (dni < 0 || dni > 99999999)
        alert("Introduce 8 numeros exactos");
    else{
        document.getElementById("p").innerHTML = dni + calcularLetra(dni, letras);
    }
}

function calcularLetra(dni, letras){
    var calculo = dni % 23;
    return letras[calculo];
}
