
let num1 = parseInt(prompt("Introduce un numero: "));
let num2 = parseInt(prompt("Introduce un numero: "));
let num3 = parseInt(prompt("Introduce un numero: "));

let media = hacerMedia(num1, num2, num3);

document.write("La media de los numeros es: " + media);

function hacerMedia(n1, n2, n3){
    let media = (n1 + n2 + n3) / 3;
    return media;
}