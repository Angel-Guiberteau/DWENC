
let num = prompt("Introduce un numero: ");

let digitos = comprobar(num);

document.write("El numero de digitos es: " + digitos);

function comprobar(n){
    let digitos = n.length;
    return digitos;
}