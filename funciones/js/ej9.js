
let num1 = parseInt(prompt("Introduce un numero: "));

let elevado = elevar(num1);

document.write("El numero elevado a la tercera potencia es: " + elevado);

function elevar(n){
    let elevado = Math.pow(n, 3); //Eleva el numero a la tercera potencia
    return elevado;
}