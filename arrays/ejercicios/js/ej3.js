
let array = [];

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Ingrese la altura ${i + 1}: `));
    array.push(numero);
}

let media = promedioAltura(array);

document.write(`El promedio de las alturas es: ` + media);

function promedioAltura(array) {

    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    let media = suma / array.length;

    return media ;

}