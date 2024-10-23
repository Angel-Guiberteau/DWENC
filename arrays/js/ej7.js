
let array1 = [50, 2, 90, 4, 20];
let array2 = [6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
    let resultado = comprobarArray(array1, array2, i);
    document.write(resultado);
}

function comprobarArray(array1, array2, i) {

    if (array1[i] < array2[i])
        return `Lista [${i}] 2 mayor <br>`;
    else 
        return `Lista [${i}] 1 mayor <br>`;

}