function carregar() {
    var valores = [true, 5, false, "hola", "adios", 2];

    document.getElementById("texto").innerHTML = "El texto mayor es: " + textoMayor(valores);
    document.getElementById("t").innerHTML = "True: " + trueFals(valores);
    document.getElementById("f").innerHTML = "Fals: " + trueFals2(valores);
    document.getElementById("op").innerHTML = "Operaciones: " + operaciones(valores);
    
    function textoMayor(valores) {
        var aux = "";
        valores.forEach(i => {
            if (typeof i == "string") {
                if (i.length > aux.length)
                    aux = i;
            }
        });

        return aux;
    }

    function trueFals(valores) {
        var aux = false;
        valores.forEach(i => {
            if (typeof i == "number")
                aux = true;
        });
        return aux;
    }

    function trueFals2(valores) {
        var aux = false;
        if (valores.includes(10))
            aux = true;
        return aux;
    }

    function operaciones(valores) {
        var suma = valores[1] + valores[5];
        var resta = valores[1] - valores[5];
        var multiplicar = valores[1] * valores[5];
        var dividir = valores[1] / valores[5];

        var msg = "Suma = " + suma + " Resta = " + resta + " Multiplicar = " + multiplicar + " Dividir = " + dividir;
        return msg;
    }
}