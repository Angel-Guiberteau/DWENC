
let array = [];

for (let i = 0; i <= 8; i++){
    
    let num = parseInt(prompt('Introduce un número'));
    array.push(num);

}

let total = sumaElementos(array);
let mayores36 = mayoresTreintaSeis(array);
let mayores50 = mayoresCincuenta(array);

document.write('La suma de los elementos es: ' + total + '<br>');

document.write('La suma de los elementos mayores a 36 es: ' + mayores36 + '<br>');

document.write('La suma de los elementos mayores a 50 es: ' + mayores50 + '<br>');

function sumaElementos(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}

function mayoresTreintaSeis(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 36){
            suma += array[i];
        }
    }
    return suma;
}
function mayoresCincuenta(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] > 50){
            suma += array[i];
        }
    }
    return suma;
}   
