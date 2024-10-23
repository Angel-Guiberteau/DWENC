
let num1 = parseInt(prompt("Introduce un numero: "));
let num2 = parseInt(prompt("Introduce un numero: "));
let num3 = parseInt(prompt("Introduce un numero: "));

let max = comprobar(num1, num2, num3);

document.write("El numero mayor es: " + max);

function comprobar(n1, n2, n3){
    let max = Math.max(n1, n2, n3);
    return max;
}