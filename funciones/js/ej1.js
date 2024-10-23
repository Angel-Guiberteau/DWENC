
let num1 = parseInt(prompt("Introduce un numero: "));
let num2 = parseInt(prompt("Introduce un numero: "));
let num3 = parseInt(prompt("Introduce un numero: "));

let min = comprobar(num1, num2, num3);

document.write("El numero mayor es: " + min);

function comprobar(n1, n2, n3){

    return Math.min(n1, n2, n3);

}