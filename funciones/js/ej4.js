
let lado = parseInt(prompt("Introduce el lado del cuadrado: "));

let perimetro = calcularPerimetro(lado);

document.write("El perimetro del cuadrado es: " + perimetro);

function calcularPerimetro(lado){
    let perimetro = lado * 4;
    return perimetro;
}