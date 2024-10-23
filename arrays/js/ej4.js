

let array1 = [2,4,5];
let array2 = [2,3,6];

let suma = sumaVectores(array1, array2);

document.write(`La suma de los vectores es: `);

for (let i = 0; i < suma.length; i++){
    document.write(`${suma[i]} `);
}

function sumaVectores(array1, array2){ 

    let suma = [];

    for (let i = 0; i < array1.length; i++){
        suma.push(array1[i] + array2[i]);
    }
    return suma;
}