
let num1 = parseInt(prompt("Introduce un numero: "));

let cuadrada = calcularCuadrado(num1);

document.write("La raiz cuadrada del numero es: " + cuadrada);

function calcularCuadrado(n){
    let cuadrada = Math.sqrt(n); //Coge la raiz cuadrada del numero
    return cuadrada;
}