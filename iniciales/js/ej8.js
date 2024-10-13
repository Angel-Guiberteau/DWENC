 
let cadena = prompt("Introduce una cadena de texto");

let cadenaInvertida = cadena.split("").reverse().join(""); //Da la vuelta a la cadena


if (palindromo)
    document.write("La cadena: " + cadena + " , es recursiva");
else
    document.write("La cadena: " + cadena + " , no es recursiva");


function palindromo(cadena){

    if (cadena === cadenaInvertida)
        return true;
    else
        return false;

}