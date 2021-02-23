function carregar() {
    var cadena = prompt("Indroduce una cadena de texto:");
    document.getElementById("p").innerHTML = determinar(cadena);
}

function determinar(cadena) {
    if(cadena == cadena.toUpperCase()){
        return "todos mayúsculas";
    }
    if(cadena == cadena.toLowerCase()){
        return "todos minúsculas";
    } 
    else{
        return "mezcla";
    }
}
