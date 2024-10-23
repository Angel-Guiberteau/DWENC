
let numeros = [];
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `));
    numeros.push(numero);
}

let suma = 0;

for (let i = 5; i < 10; i++) {
    suma += numeros[i];
}

document.write(`La suma es: ${suma}`);