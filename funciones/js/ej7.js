
let num1 = parseInt(prompt("Introduce un numero: "));
let num2 = parseInt(prompt("Introduce un numero: "));
let num3 = parseInt(prompt("Introduce un numero: "));
let num4 = parseInt(prompt("Introduce un numero: "));
let num5 = parseInt(prompt("Introduce un numero: "));

let max = sumar(num1, num2, num3, num4, num5);

document.write("La suma de los numeros es: " + max);

function sumar(n1, n2, n3, n4, n5){
    let suma = n1 + n2 + n3 + n4 + n5;
    return suma;
}